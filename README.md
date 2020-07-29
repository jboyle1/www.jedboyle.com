### www.jedboyle.com

## Name of Project: My portfolio website

This is the second version of my portfolio website. I decided to update my old static site with Node.js, Express and Handlebars. The problem with the old version was that every time I wanted to add a new project to the portfolio section, I would have to add it to every page as a link in the navigational dropdown for mobile screen sizes. Now I had a considerable amount of projects that was becoming quite tedious.

I also wanted to cut down on repeated code. I used Node.js with a module called Express to create a base template, this encompassed the head, header and footer that was repeated on every page. I think this update probably cut the needed HTML down by half. I also used a npm module called Handlebars to eliminate the need to input data on every page, every time I wanted to add a new project. I placed a loop in the base template dropdown menu for portfolio projects. Now I only have to update the data in a Javascript object once. I did a similar thing for the list of education and work history elements on the resume page.

Overall I am pleased with this update. Looking back at the old site and comparing shows a significant improvement in my web development skills. I think I will try to update my personal website twice annually. It gives me a way to scale my skill level. In the next update I may implement SASS or a database.