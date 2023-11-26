<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>James McBurnie</title>
  <!-- Add your CSS file here -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Navigation -->
  <header>
    <?php include ("navbar.php"); ?>
  </header>

  <!-- About Me -->
  <section id="about-me">
    <h2>About my self-driven pursuits in Programming</h2>
    <p>As a dedicated university student with finance as a secondary major and a keen interest in financial market dynamics, 
        I have proactively sought to deepen my understanding of essential skills in the finance domain. 
        Recognizing the limitations of my current knowledge, I firmly believe that hands-on experience through project-based learning is the most effective approach.</p>
        <p> To achieve this goal, I am actively exploring multiple avenues. First, I have been diligently managing a portfolio on Investopedia for the past X months. 
            Second, as part of my research for maintaining the Investopedia portfolio, I have ventured into writing equity analysis reports. 
            These reports are created using only publicly accessible data found online, with all resources cited in the reference section of each report to ensure transparency.</p>
  </section>

  <!-- Media -->
  <section id="projects">
    <h2>Tennis Prediction Algorithm</h2>
    <ul>
      <!-- Add your projects here -->
      <li>
        <p>The project set out with a straightforward yet challenging aim: to build an algorithm that could predict tennis match results. 
            This task was more than just about predictions; it was a chance for me to get hands-on with the pandas library in Python, 
            learn how to clean and handle data effectively, and dip my toes into the practical uses of machine learning. 
            Through a process of trial and error and continuous improvement, the project evolved from a simple concept to a tool that could make sense of detailed data and 
            provide a glimpse into the outcomes of tennis&nbsp;matches. </p>
        <br>
        <h3> Project Skills </h3>
            <ul>
                <li> Use of the pandas library for data manipulation.
                <li> Techniques for cleaning and managing datasets.
                <li> Application of machine learning for predictive modeling.
            </ul>
        <h3> Conclusion </h3>
        <p>This project was a valuable learning experience in data management and machine learning&nbsp;techniques. 
            It culminated in achieving a peak prediction accuracy of 75.32%, where the model successfully forecasted the outcomes of 528 matches within a test dataset comprising 701 contests. 
            This result was attained after excluding outcomes from Version 1, which was identified as significantly overfitted. 
            The insights gained from this endeavor have been instrumental in understanding the critical balance between model complexity and&nbsp;generalizability.
        </p>
        <a href="https://github.com/SurvivingJ/TennisPrediction/tree/master" target="_blank">Go To Github</a>
      </li>
    </ul>
  </section>

  <!-- Contact -->
  <footer>
    <h2>Contact</h2>
    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
    <ul>
      <!-- Add your social media links here -->
      <li><a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a></li>
      <li><a href="https://github.com/yourusername" target="_blank">GitHub</a></li>
    </ul>
  </footer>