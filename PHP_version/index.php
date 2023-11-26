<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>James McBurnie</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Navigation -->
  <header>
    <?php include ("navbar.php"); ?>
  </header>

  <!-- Homepage -->
  <section id="homepage">
    <h1>James McBurnie</h1>
    <img class="headshot" src="images/headshot.jpg" alt="My Headshot" />
  </section>
  <div id="container-wholepage">
  <!-- About Me -->
  <div id="container-about-qual">
  <section id="about-me">
    <h2>About Me</h2>
    <p>Welcome! I'm James McBurnie, a dedicated professional with a flair for programming, coaching, and education. 
      In my versatile career, I've enabled young athletes to master rowing, shared my love of maths and software development through tutoring, 
      and created IT solutions that enhance business efficiency. 
      When I'm not engaging with students or coding, you might find me running the Melbourne tracks, tickling the ivories, or lost in a good book.</p>
  </section>

  <!-- Qualifications -->
  <section id="qualifications">
    <h2>Qualifications</h2>
    <ul>
      <li>
        <h3>Bachelor of Commerce - BCom, Economics</h3>
        <p>University of Melbourne</p>
      </li>
      <li>
        <h3>Diploma of Language (Chinese), Chinese </h3>
        <p>University of Melbourne</p>
      </li>
      <li>
        <h3>HSK 5 </h3>
        <a href="finance/reports/GRWG_Equity_Analysis_Report.pdf" target="_blank">Download Certificate</a>
      </li>
      <li>
        <h3> HSKK Intermediate </h3>
        <a href="finance/reports/GRWG_Equity_Analysis_Report.pdf" target="_blank">Download Report</a>
      </li>
    </ul>
  </section>
</div>
  <!-- Awards -->
  <section id="awards">
    <h2>Awards</h2>
    <ul>
      <li>
        <h3>2nd Prize for Oceania for the Chinese Bridge (汉语桥) International Competition</h3>
        <p>Centre for Language Education and Cooperation - 2022</p>
        <p>I reached the Top 30 in an International Chinese cultural knowledge competition and won a full-fare 1 year scholarship to study in China</p>
      </li>
    </ul>
    <ul>
        <li>
          <h3>1st Prize – Chinese Language & Culture Awards</h3>
          <p>Australia China Friendship Society – Victorian Branch & Consulate-General of the People’s Republic of China in Melbourne - 2022</p>
          <p>In recognition of my outstanding achievements in Chinese Language and Culture. I was nominated by the Head of Chinese at the University of Melbourne.</p>
        </li>
      </ul>
  </section>

  <!-- Media -->
  <section id="media">
    <h2>Media</h2>
    <ul>
      <li class="medialist">
        <h3> Chinese Bridge (汉语桥) - TV Show for CCTV4 </h3>
        <a href="https://www.youtube.com/playlist?list=PLVgi1JPhRaXbf_Fwzx1QRFqYVqTqIAktS" target="_blank">
          <img class="logo" src="images/youtube-logo.png" alt="Youtube Logo"/>
        </a>
        <a href="https://tv.cctv.com/2023/04/14/VIDAmhEkAcgOQsNR06ora3oK230414.shtml">
            <img class="logo" src="images/cctv4-logo.png" alt="CCTV4 Logo"/>
        </a>
      </li>
      <li class="medialist">
        <h3>《人民日报》（海外版）- The People’s Daily Paper (International Edition) </h3>
        <a href="http://paper.people.com.cn/rmrbhwb/html/2023-04/28/node_875.htm" target="_blank">
          <img class="logo" src="images/renminribao-logo.jpg" alt="The People's Daily Paper Logo" />
        </a> <br>
        <div class="cta-container">
        <a class="cta-button" href="http://paper.people.com.cn/rmrbhwb/images/2023-04/28/11/rmrbhwb2023042811.pdf">Direct Link to PDF</a>
        </div>
      </li>
    </ul>
  </section>

  <!-- Projects -->
  <section id="projects">
    <h2>Projects</h2>
    <ul>
  <!-- Programming Projects -->
  <li>
    <img src="images/programming_icon.png" alt="Programming Project Thumbnail" />
    <div class="project-text">
      <h3>Programming Projects</h3>
      <p>As a lover of building things, programming provides me a method to develop anything I can imagine. I enjoy challenging myself and trying new things. Recognizing the limitations of my current knowledge, I firmly believe that hands-on experience through project-based learning is the most effective approach.</p>
      <!-- Link to the programming project -->
      <div class="cta-container">
        <a class="cta-button" href="programming.php">View Project</a>
      </div>
    </div>
  </li>
</ul>
<ul>
  <!-- Portfolio Management & Equity Analysis Reports -->
  <li>
    <img src="images/finance_icon.png" alt="Finance Project Thumbnail" />
    <div class="project-text">
      <h3>Portfolio Management & Equity Analysis Reports</h3>
      <p>As a dedicated university student with finance as a secondary major and a keen interest in financial market dynamics, I have proactively sought to deepen my understanding of essential skills in the finance domain. Recognizing the limitations of my current knowledge, I firmly believe that hands-on experience through project-based learning is the most effective approach.</p>
      <!-- Link to the finance project -->
      <div class="cta-container">
        <a class="cta-button" href="finance.php">View Project</a>
      </div>
    </div>
  </li>
</ul>
<ul>
  <!-- Piano Arrangements -->
  <li>
    <img src="images/piano_icon.png" alt="Piano Arrangements Thumbnail" />
    <div class="project-text">
      <h3>Piano Arrangements</h3>
      <p>I have played piano for nearly a decade and enjoy arranging songs by ear. I have included a selection on this YouTube channel. I plan to continue to record my repertoire and upload it to this channel as an archive of songs I have arranged. I hope one day to compose an album too.</p>
      <!-- Link to the piano arrangements channel -->
      <div class="cta-container">
        <a class="cta-button" href="https://www.youtube.com/@rfpiano2993/videos">View Channel</a>
      </div>
    </div>
  </li>
</ul>
  </section>
</div>
  <!-- Contact -->
  <footer>
    <?php include ("footer.php"); ?>
  </footer>