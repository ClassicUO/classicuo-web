#!/bin/bash

declare -a runtimes=("win-x64" "linux-x64" "osx.12-x64" "osx.12-arm64")

for i in "${runtimes[@]}"
do
   echo "Bulding for runtime: $i"
   dotnet publish src/ClassicUO-Web-FileDiff.csproj -p:PublishSingleFile=true -p:PublishReadyToRun=true -p:PublishTrimmed=true -p:SelfContained=true -c Release -r $i
done
