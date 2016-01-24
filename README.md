#Project 4: FEND @ Udacity
## Website Performance Optimization Project

**The Challenge:**

1. Optimize the critical rendering path on index.html to achieve a PageSpeed score of 90+.
2. Optimize the browser rendering on tea-party.html to ensure a consistent frame rate of 60fps when scrolling on this page.
3. Optimize the size slider on tea-party.html so that resizing the tea pots takes less than 5ms, as shown in the browser console.
4. Document the code in main.js to explain longer procedures.
5. Include a README file detailing all the steps to successfully run the application (huh? which application?), and outline the optimization preformed.

####Part 1: Score 90+ on PageSpeed Insights for index.html
When I [go here](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fchavahj.github.io%2Fperfmatters%2F&tab=mobile) I get the following results for [index.html](http://chavahj.github.io/perfmatters/):

1. Desktop: 93/100
2. Mobile: 93/100

What did I do to optimize this page?
1. Restructured it (mainly so I could understand what was going on).
2. Moved the CSS into script tags on the html document itself.
3. Added a WebFont load script for the Google Font I am using.
4. Added an "async" tag to the linked JavaScript files.
5. Optimized the images for the web (using PhotoShop). I used low resolution, progressive jpeg files, without any meta data included.

####Part 2: Ensure Consistent Rate of 60fps for Scrolling Tea pots
This was the most difficult part of the project (for me at least). I think I spent more time on this section than everything else combined. To see the results:
1. Open the [tea-party.html page](http://chavahj.github.io/perfmatters/tea-party.html).
2. Open the Dev Tools panel and go to the Timeline tab.
3. Click on the "record" button in the upper-left hand corner of the Timeline panel, or hit Ctrl+E.
4. Scroll down the page. Admire the beautiful, red tea pots moving across the background.
5. Click on the record button again to stop the recording (or hit Ctrl+E again).
6. You will see lovely green hills, and if you hover over the grey bars where the overall time is being demarcated, you will see that most of the time the scrolling is hitting around 60ps.
7. The console log will show something like: "Average time to generate last 10 frames: 0.28150000000041475ms".

![alt text](https://github.com/chavahj/perfmatters/img/62-fps.JPG "Snippet of Google Timeline")

####Part 3: Optimize the Size Slider
1. Open the [tea-party.html page](http://chavahj.github.io/perfmatters/tea-party.html).
2. Open the Dev Tools panel and go to the console log.
3. Use the slider to change the size of the tea parties.
4. The console log shows: "Time to resize tea-party: 1.1200000000008004ms".

####Part 4: Document the Code in main.js
I did add comments here and there. It might be that I could have done more. But that's what happens when your project is already a week late.

####Part 5: Include a README file
I have included a README file. I even changed it from the original one included.  :-)

####NOTES ABOUT THE PROJECT
1. I should have started working on this more seriously before January 12th, 2016. I realize I am a week late in submitting my project.
2. I missed having my team, as this was the first project I did after the teams were disbanded. I admit, I didn't make it to every team meeting, but it was nice to have a smaller group to ask all those "stupid" questions, versus feeling like a total ignoramus in the broader discussion forums.
3. I wasted too much time worrying about how the site looked. It was hard to let go of aesthetics for this project, although I got better at the end (especially once the deadline passed).
4. The pizzas really bothered me, and I also wasted time switching over to the Alice in Wonderland theme. But it really helped me function better for the remaining duration of the project. Probably the pizzas aren't a problem for most students -- I happen to keep kosher, and the default pizzas were about as not kosher as it gets.
5. I tried installing Grunt, but couldn't get it to work properly. I also tried installing Gulp, but freaked out when I saw all the node files. Maybe using a build tool should be a project/course unto itself? Seems like a pretty big thing to throw in as a bonus for this project.
