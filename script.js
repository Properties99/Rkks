projectSelect.addEventListener('change', function () {
        const selectedProject = projectSelect.value;
        detailsDiv.innerHTML = selectedProject ? projectDetails[selectedProject] : '';
      });
    });
  </script>
</head>
<body>
  <div class="container">
    <h1>Emaar Trending</h1>
    <form id="projectForm">
      <label for="project">Choose Project:</label>
      <select id="project" required>
        <option value="" disabled selected>--Choose a project--</option>
        <option value="Mivida">Mivida</option>
        <option value="MSA">MSA</option>
        <option value="BV">BV</option>
        <option value="Soul">Soul</option>
        <option value="RasHikma">Ras Hikma Apartments / Golf Villa</option>
      </select>

      <label for="details">Details:</label>
      <div id="details" aria-live="polite"></div>
    </form>
  </div>
</body>
</html>