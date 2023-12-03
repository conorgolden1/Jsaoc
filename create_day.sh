#!/bin/bash

if [ "$#" -ne 0 ]; then
    echo "Usage: this script takes no commandline parameters"
    exit 1
fi

read -p "Enter the advent of code day (1-25): " user_input

if [[ ! ( "$user_input" =~ ^[0-9]+$ && "$user_input" -ge 1 && "$user_input" -le 25) ]]; then
    echo "Error: $user_input is invalid"
    exit 1
fi

template_folder="template/"

if [ ! -d "$template_folder" ]; then
    echo "Error: Template folder not found"
    exit 1
fi

dest_folder="day_$user_input"

if [ ! -d "$dest_folder" ]; then
    mkdir -p "$dest_folder"
fi

find "$template_folder" -type f | while read -r file; do
    if [[ "$file" =~ ^"template/template" ]]; then
        new_file=$(echo $file | sed "s#template/template\\.#$dest_folder.#")
        cp "$file" "$dest_folder/$new_file"
        if [[ "$file" =~ ^"template/template.test" ]]; then
            echo "const day = $user_input" | cat - "$dest_folder/$new_file" > temp && mv temp "$dest_folder/$new_file"
        fi
    else
        new_file=$(echo $file | sed "s#template/##")
        cp "$file" "$dest_folder/$newfile"
    fi
done

echo "Files copied and renamed successfully from $template_folder to $dest_folder"
