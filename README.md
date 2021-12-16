# Alpaca Image Generator

This project idea came from [DevProjects by codementor](https://www.codementor.io/projects/web/alpaca-image-generator-website-ce2oc0eus8). The images were provided and I had to find a way to create the app using any means necessary. I chose to use React to cement some of the basic skills I had learned in previous projects. I learned how to dynamically render images based on user choice and how to download the compilation of choices as one single png file for the user to keep.

Project: [Alpaca Generator](https://aakeohane.github.io/alpaca-generator/)

## Features ✅

- User can customize their alpaca by choosing options from each category, or randomize the options
- Users can then download their alpaca as a png
- DevProjects brief provided the mockup for the UI design for me to develop with strictly CSS
- There were other solutions to make use of, however, the only time I needed help was when learning how to implement the "Download" button for the alpaca image
- useEffect hook is used to download initial data from a source file which is then manipulated through state

## Technologies / Dependencies

- React
- JSX
- CSS
- [merge-images](https://github.com/lukechilds/merge-images) dependency

## Final Reflections

I built this project to cement my understanding of Reacts foundational elements.

I used some of the same thought processes as my other React projects utilizing state in what I felt was the best way. There may be better ways to approach some of the problems, however I am very proud of my personal growth with this project.

I think going forward, I want to break up my project into more components and make use of props more than I have done. A lot of the logic lives in App.js and I think for scaling, it would make more sense to start placing certain functions within the components.

### Author

[Aaron Keohane](https://aakeohane.github.io/Portfolio-Website/index.html)

### Version

1.0.0
