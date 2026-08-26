# Brix Umrechner - native Builds

Dieses Projekt erzeugt zwei eigenständige Offline-Anwendungen aus dem Brix-Umrechner:

- `Brix-Umrechner-Windows.exe` für Windows 10/11 (64 Bit)
- `Brix-Umrechner-Android.apk` für Android

Die GitHub-Actions-Datei unter `.github/workflows/build.yml` erstellt beide Dateien automatisch und stellt sie als Build-Artefakte bereit.

## Wichtig beim Hochladen

Die Dateien aus diesem Paket müssen direkt im Stamm des Repositorys liegen. `package.json` und der Ordner `.github` dürfen nicht in einem zusätzlichen Unterordner liegen. Das ZIP-Paket selbst darf nicht unverändert als einzelne Datei hochgeladen werden; es muss zuerst entpackt werden.

Nach dem Hochladen startet der Build bei jedem Branch automatisch. Alternativ kann er unter **Actions → Build Windows EXE and Android APK → Run workflow** manuell gestartet werden.

Die Android-Datei ist als Debug-APK signiert und direkt installierbar. Für eine Veröffentlichung im Google Play Store ist später eine eigene Release-Signatur und ein Android App Bundle erforderlich. Die Windows-Datei ist nicht mit einem kommerziellen Herausgeberzertifikat signiert; Windows kann deshalb beim ersten Start einen SmartScreen-Hinweis anzeigen.
