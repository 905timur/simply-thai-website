#!/bin/bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null
then
    echo "ImageMagick is not installed. Please install it and try again."
    exit 1
fi

# Directory containing PNG files
DIRECTORY="./" # Change this to your desired directory

# Loop through all PNG files in the directory
for FILE in "$DIRECTORY"*.png
do
    # Check if file exists
    if [ -f "$FILE" ]; then
        # Remove the .png extension and add .jpg extension
        OUTPUT="${FILE%.png}.jpg"
        # Convert PNG to JPG
        convert "$FILE" "$OUTPUT"
        echo "Converted $FILE to $OUTPUT"
    fi
done

echo "Conversion complete."

