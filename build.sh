dotnet restore aariveros-reporting-web.csproj
rm -rf bin/release
dotnet publish aariveros-reporting-web.csproj -c release