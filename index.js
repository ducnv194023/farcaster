const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const express = require("express");
const app = express();



app.post('/', (req, res) => {
  res.send(`
    <html>
       <head>   
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width"/>
          
          <meta property='og:image' content="https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/thumbnail/1710904409661.png" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/thumbnail/1710904409661.png" />
          
          <meta property="fc:frame:image:aspect_ratio" content="1:1" />

          <meta property="fc:frame:button:1" content="Read Inline" />
          <meta property="fc:frame:button:1:action" content="post" />
          <meta property="fc:frame:button:1:target" content="https://62f6-222-252-97-142.ngrok-free.app/1" />
        </head>
        <body>Article</body>
    </html>`);
});

app.get('/', (req, res) => {
    res.send(`
      <html>
         <head>   
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width"/>
            
            <meta property='og:image' content="https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/thumbnail/1710904409661.png" />
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/thumbnail/1710904409661.png" />
            
            <meta property="fc:frame:image:aspect_ratio" content="1:1" />

            <meta property="fc:frame:button:1" content="Read Inline" />
            <meta property="fc:frame:button:1:action" content="post" />
            <meta property="fc:frame:button:1:target" content="https://62f6-222-252-97-142.ngrok-free.app/1" />
          </head>
          <body>Article</body>
      </html>`);
});

app.get('/generate-image', (req, res) => {

  

  res.send(`
  <html>
  <body>
  ${text}
  </body>
  </html>`);
});

app.post('/1', (req, res) => {
  res.send(`
  <html>
     <head>   
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width"/>
        
        <meta property='og:image' content="https://e7.pngegg.com/pngimages/578/522/png-clipart-black-and-white-brand-pattern-number-1-angle-white-thumbnail.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://e7.pngegg.com/pngimages/578/522/png-clipart-black-and-white-brand-pattern-number-1-angle-white-thumbnail.png" />
        
        <meta property="fc:frame:image:aspect_ratio" content="1:1" />

        <meta property="fc:frame:button:1" content="<" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1:target" content="https://62f6-222-252-97-142.ngrok-free.app/" />

        <meta property="fc:frame:button:2" content=">" />
        <meta property="fc:frame:button:2:action" content="post" />
        <meta property="fc:frame:button:2:target" content="https://62f6-222-252-97-142.ngrok-free.app/2" />
      </head>
      <body>Article</body>
  </html>`);
})

app.post('/2', (req, res) => {
  res.send(`
  <html>
     <head>   
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width"/>
        
        <meta property='og:image' content="https://img.lovepik.com/free-png/20210924/lovepik-number-2-png-image_401345124_wh1200.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://img.lovepik.com/free-png/20210924/lovepik-number-2-png-image_401345124_wh1200.png" />
        
        <meta property="fc:frame:image:aspect_ratio" content="1:1" />

        <meta property="fc:frame:button:1" content="<" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1:target" content="https://62f6-222-252-97-142.ngrok-free.app/1" />

        <meta property="fc:frame:button:2" content=">" />
        <meta property="fc:frame:button:2:action" content="post" />
        <meta property="fc:frame:button:2:target" content="https://62f6-222-252-97-142.ngrok-free.app/3" />
      </head>
      <body>Article</body>
  </html>`);
})

app.post('/3', (req, res) => {
  res.send(`
  <html>
     <head>   
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width"/>
        
        <meta property='og:image' content="https://e7.pngegg.com/pngimages/929/334/png-clipart-euclid-s-elements-project-euclid-number-academic-journal-mathematics-number-3-image-file-formats-text.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://e7.pngegg.com/pngimages/929/334/png-clipart-euclid-s-elements-project-euclid-number-academic-journal-mathematics-number-3-image-file-formats-text.png" />
        
        <meta property="fc:frame:image:aspect_ratio" content="1:1" />

        <meta property="fc:frame:button:1" content="<" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1:target" content="https://62f6-222-252-97-142.ngrok-free.app/2" />

        <meta property="fc:frame:button:2" content=">" />
        <meta property="fc:frame:button:2:action" content="post" />
        <meta property="fc:frame:button:2:target" content="https://62f6-222-252-97-142.ngrok-free.app/4" />
      </head>
      <body>Article</body>
  </html>`);
})

app.post('/4', (req, res) => {
  res.send(`
  <html>
     <head>   
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width"/>
        
        <meta property='og:image' content="https://png.pngtree.com/png-clipart/20210309/original/pngtree-number-4-golden-luxury-png-image_5871155.jpg" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://png.pngtree.com/png-clipart/20210309/original/pngtree-number-4-golden-luxury-png-image_5871155.jpg" />
        
        <meta property="fc:frame:image:aspect_ratio" content="1:1" />

        <meta property="fc:frame:button:1" content="<" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1:target" content="https://62f6-222-252-97-142.ngrok-free.app/3" />
      </head>
      <body>Article</body>
  </html>`);
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
