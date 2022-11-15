// load express / require modules
const express = require('express');

//create express app
const app = express();

//configure the app
const fs = require('fs')

// define the view engine
app.engine('hw',(filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)
        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
            .replace('#content#','<div>'+ options.content + '</div>')
        return callback(null, rendered)
    }) 
})

// app.engine('hw2', (filePath, options, callback) => {
//   fs.readFile(filePath, (err, content) => {
//       if (err) return callback(err)
//       const rendered = content.toString()
//           .replace('#title#', '<title>' + options.title + '</title>')
//           .replace('#message#', '<h1>' + options.message + '</h1>')
//           .replace('#content#','<div>'+ options.content + '</div>')
//       return callback(null, rendered)
//   }) 
// })

// specify the views directory
app.set('views', './views')
app.set('view engine', 'hw')
// app.set('view engine', 'hw2')

// mount routes / define a 'root' path directly on app(root = /)
app.get('/', (req, res) => {
    res.render('secondtemplate', { title: 'YO', message: 'YERRR', content: 'HOW YOU FAM' })
  })

  app.get('/general', (req, res) => {
    res.render('template', { title: 'YO', message: 'Toby Emelle!', content: 'struggling software engineering student' })
  })

  app.get('/chapter3', (req, res) => {
    res.render('template', { title: 'YO', message: 'story', content: 'this is chapter 3' })
  })

  app.get('/chapter4', (req, res) => {
    res.render('template', { title: 'YO', message: 'story', content: 'this is chapter 4' })
  })

  app.get('/chapter5', (req, res) => {
    res.render('template', { title: 'YO', message: 'story', content: 'this is chapter 5' })
  })

  app.get('/chapter6', (req, res) => {
    res.render('template', { title: 'YO', message: 'story', content: 'this is chapter 6' })
  })

  app.get('/chapter7', (req, res) => {
    res.render('template', { title: 'YO', message: 'story', content: 'this is chapter 7' })
  })

  app.get('/chapter8', (req, res) => {
    res.render('template', { title: 'YO', message: 'story', content: 'this is chapter 8' })
  })

  app.get('/chapter9', (req, res) => {
    res.render('template', { title: 'YO', message: 'story', content: 'this is chapter 9' })
  })

  app.get('/chapter10', (req, res) => {
    res.render('template', { title: 'YO', message: 'story', content: 'this is chapter 10' })
  })

  app.listen(3000, function() {
    console.log('Listenting on port 3000');
})