# Image-slider
Simple Image Slider
Hey there! Welcome to this little project. This is a basic image slider built with plain HTML, CSS, and JavaScript. It's a great starting point for understanding how to combine these three core web technologies to create something interactive.

You'll see a few things:

Navigation Buttons: Buttons to go to the next or previous image.

Dot Indicators: Small dots that tell you which image you're currently on.

Auto-Play: The slider automatically moves to the next image after a few seconds.

How to Get It Working
Getting this up and running is super easy! All you need to do is put these three files—index.html, style.css, and script.js—in the same folder on your computer.

Then, just open the index.html file in your favorite web browser (like Chrome, Firefox, or Safari). That's it! Everything should work.

Common Beginner Struggles (and How to Fix Them!)
If your slider isn't working perfectly, don't worry! Everyone hits these little roadblocks. Here are the most common things that can go wrong:

1. "Nothing is showing up!"
This is usually a file path issue. A common mistake is putting the files in different folders. Make sure your index.html, style.css, and script.js are all sitting right next to each other.

2. "The buttons don't do anything!"
If you see the images and the dots, but clicking the arrows doesn't change anything, the problem is most likely in your JavaScript. You should open your browser's developer tools (usually by pressing F12 or Ctrl+Shift+I) and click on the Console tab.  If you see any red error messages, that's your clue! A common issue is a typo in a variable name.

3. "My images are stacked on top of each other, not sliding!"
This is a classic CSS problem. The horizontal sliding effect relies on specific CSS rules that tell the images to sit side-by-side (display: flex) and hide everything that's off-screen (overflow: hidden). If you've modified the CSS, you might have accidentally removed one of these critical properties.

4. "My images are just a broken icon!"
This means your images aren't loading. The browser can't find them.  This is usually because of a wrong image path. The code assumes your images are in a folder named assets. If your images are somewhere else, you'll need to update the src attribute in your index.html file to point to the correct location.

For example, if your images are in the same folder as the HTML file, you would change src="assets/my-image.jpg" to src="my-image.jpg".

Want to Customize It?
Now that you have it working, you can play around with the code!

Add more images: Just add more <div class="slide"> elements with your own image paths in the HTML.

Change the speed: In script.js, change the number 5000 to a different value (e.g., 2000 for 2 seconds) to make the auto-play faster or slower.

This project is a great way to learn, so feel free to experiment! If you get stuck, just ask for help.
