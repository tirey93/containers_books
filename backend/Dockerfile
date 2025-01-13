# Użyj oficjalnego obrazu .NET 8 SDK jako bazy dla budowania
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Ustaw katalog roboczy wewnątrz kontenera
WORKDIR /app

# Skopiuj plik .csproj i pobierz zależności
COPY *.csproj ./
RUN dotnet restore

# Skopiuj pozostałe pliki projektu
COPY . ./

# Opublikuj aplikację w trybie Release
RUN dotnet publish -c Release -o /app/publish

# Użyj oficjalnego obrazu .NET 8 Runtime jako bazy dla uruchomienia
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

# Ustaw katalog roboczy wewnątrz kontenera
WORKDIR /app

# Skopiuj opublikowaną aplikację z etapu build
COPY --from=build /app/publish ./

# Ustaw zmienną środowiskową ASPNETCORE_URLS
ENV ASPNETCORE_URLS=http://+:80

# Uruchom aplikację
ENTRYPOINT ["dotnet", "ContainerBackend.dll"]