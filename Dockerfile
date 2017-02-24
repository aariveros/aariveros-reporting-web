FROM microsoft/dotnet

COPY . /app
WORKDIR /app
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]

RUN rm -rf /bin/release
RUN dotnet publish -c release
COPY /bin/release/netcoreapp1.0/publish/. .

ENTRYPOINT ["dotnet", "/app/aariveros-reporting-web.dll"]

EXPOSE 7800
ENV ASPNETCORE_URLS http://*:7800
