# Galaxy Rewind

Galaxy Rewind is a frontend web application that allows users to explore NASA’s Astronomy Picture of the Day (APOD) for any selected date. The application focuses on creating a clean and interactive user experience using only HTML, CSS, and JavaScript, without any backend.

## Features

* Select any date to view the space image or video from that day
* Random date option to explore unexpected content
* Fullscreen view for images with an HD toggle
* Save favorite images using localStorage
* Smooth UI updates with loading and error handling

## Tech Stack

* HTML for structure
* CSS for styling and animations
* JavaScript for logic and API integration
* NASA APOD API as the data source

## API

https://api.nasa.gov/planetary/apod

## How It Works

The user selects a date through the input field. A request is sent to the NASA APOD API using JavaScript’s fetch method. The response includes the image or video, title, and description, which are then dynamically displayed on the page. Users can also save their favorite results, which are stored locally in the browser.

## Project Structure

Galaxy-Rewind/
├── index.html
├── style.css
├── script.js

## Run Locally

1. Get a free API key from NASA
2. Replace the API key in the JavaScript file
3. Open index.html in a browser

## Purpose

This project demonstrates how to work with external APIs, manage dynamic content, and build an interactive interface using only frontend technologies. It emphasizes clean UI, smooth interactions, and practical use of browser storage.

---

Galaxy Rewind is designed to keep the idea simple while making the overall experience engaging and polished.
