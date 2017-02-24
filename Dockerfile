FROM microsoft/dotnet

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm

COPY . /app
WORKDIR /app

RUN npm cache clean
RUN npm install

RUN nodejs /app/node_modules/.bin/bower cache clean --allow-root
RUN nodejs /app/node_modules/.bin/bower install --allow-root
RUN nodejs /app/node_modules/.bin/gulp clean
RUN nodejs /app/node_modules/.bin/gulp min

RUN ["dotnet", "restore"]

RUN rm -rf /bin/release
RUN dotnet publish -c release

ENTRYPOINT ["dotnet", "/app/bin/release/netcoreapp1.0/publish/aariveros-reporting-web.dll"]

EXPOSE 7800
ENV ASPNETCORE_URLS http://*:7800
