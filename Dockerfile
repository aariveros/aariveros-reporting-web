FROM microsoft/dotnet
CMD ["bash", "build.sh"]
WORKDIR /app
ENV ASPNETCORE_URLS http://*:7800
COPY bin/release/netcoreapp1.0/publish/. .
EXPOSE 7800
ENTRYPOINT ["dotnet", "aariveros-reporting-web.dll"]
