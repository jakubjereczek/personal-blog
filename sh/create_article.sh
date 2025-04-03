#!/bin/bash

sanitize_title() {
  echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g'
}

sanitize_tags() {
  echo "$1" | tr ',' '\n' | while read -r tag; do
    tag=$(echo "$tag" | xargs)
    echo "  - $tag"
  done
}

current_date=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

read -p "Enter the title of the article: " title
read -p "Enter a brief description: " description
read -p "Enter author name: " author
read -p "Enter tags (comma separated): " tags_input
mkdir -p "public/articles"

filename=$(sanitize_title "$title").mdx
tags=$(sanitize_tags "$tags_input") 

cat > "public/articles/$filename" <<EOL
---
title: '$title'
description: '$description'
date: '$current_date'
author: '$author'
tags:
$tags
---

## Introduction

Write your article content here.
EOL

echo "Article $filename created."