How to Run 

1) npm i - for client and server folders (inside that folders)
2) run server ('npm run start' from server folder) to run back-end
3) run client ('npm start' from client folder) to run front-end

How saving images forks ? 

In this project, I used 'multer' to create folder 'uploads' and made it public. (all images saved on hard drive (storage))
Better solution would be to save images in Cloud Object Storage (Amazon 3ws, Firestore ect.)
Images: [contains only links] in db

All requirements from test task was fulfilled. Everything worked fine, at least before commit)

There is no validation, validates only (empty) post request.

db - MongoDB 

![Untitled](https://user-images.githubusercontent.com/89459995/181634482-aebd7f0e-1eeb-4c05-9d7c-c96cf28669ad.jpg)
