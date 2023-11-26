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
    <h2>About my self-driven pursuits in Finance</h2>
    <p>As a dedicated university student with finance as a secondary major and a keen interest in financial market dynamics, 
        I have proactively sought to deepen my understanding of essential skills in the finance domain. 
        Recognizing the limitations of my current knowledge, I firmly believe that hands-on experience through project-based learning is the most effective approach.</p>
        <p> To achieve this goal, I am actively exploring multiple avenues. First, I have been diligently managing a portfolio on Investopedia for the past X months. 
            Second, as part of my research for maintaining the Investopedia portfolio, I have ventured into writing equity analysis reports. 
            These reports are created using only publicly accessible data found online, with all resources cited in the reference section of each report to ensure transparency.</p>
  </section>

  <!-- Media -->
  <section id="media">
    <h2>Investopedia</h2>
    <ul>
      <!-- Add your media coverage or publications here -->
      <li>
        <h3> Current Portfolio Status (02/05/2023)</h3>
        <img src="images/investopedia-portfolio.PNG"/>
      </li>
      <li class="medialist">
        <h3> Portfolio Performance History Raw Data </h3>
        <a href="performance-history-2023-05-01.xls" target="_blank">
          <img class="logo" src="images/microsoft-excel-logo.png" alt="Microsoft Excel Logo" />
        </a>
        <a href="performance-history-2023-05-01.csv">
            <img class="logo" src="images/csv-logo.png" alt="CSV Logo" />
        </a>
      </li>
      <li class="medialist">
        <h3> Portfolio Trade History Raw Data </h3>
        <a href="trade-history-2023-05-01.xls">
          <img class="logo" src="images/microsoft-excel-logo.png" alt="Microsoft Excel Logo" />
        </a> 
        <a href="trade-history-2023-05-01.csv">
            <img class="logo" src="images/csv-logo.png" alt="CSV Logo" />
        </a>
      </li>
    </ul>
  </section>

  <section id="projects">
    <h2>Equity Analysis Reports</h2>
    <ul>
      <!-- Add your projects here -->
      <li>
        <img src="images/GrowGeneration_Corp_Logo.jpg" alt="GrowGenerationCorp Logo" />
        <h3>GRWG - Grow Generation Corp</h3>
        <a href="finance/reports/GRWG_Equity_Analysis_Report.pdf" target="_blank">Download Report</a>
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