FROM microsoft/dotnet
WORKDIR /app
COPY bin/release/netcoreapp1.0/publish/. .
EXPOSE 5000
ENTRYPOINT ["dotnet", "aariveros-reporting-web.dll"]

CMD ["bash", "build.sh"]

