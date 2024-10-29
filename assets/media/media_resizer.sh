for file in *.{png,gif,jpg,jpeg,webp,jfif}; do
   width=$(identify -format "%w" "$file")
   height=$(identify -format "%h" "$file")
   echo -n Converting ${file} ${width}x${height}...
   if [ $width -lt 1920 ] && [ $height -lt 1920 ]; then
      echo skipped
      continue
   fi
   convert -resize 1920x1920\> "$file" "$file"
   new_width=$(identify -format "%w" "$file")
   new_height=$(identify -format "%h" "$file")
   echo done ${new_width}x${new_height}
done
