function demoQuerySelector() {
      let firstImportantCourse = document.querySelector(".important");

      firstImportantCourse.style.backgroundColor = "#f8d7da";
      firstImportantCourse.style.border = "2px solid #c0392b";

      showOutput(
        "Method: querySelector()\n\n" +
        "It selects the first element that matches a CSS selector.\n\n" +
        "Selector used: .important\n" +
        "Only the first important course is selected."
      );
    }

    function demoQuerySelectorAll() {
      let allImportantCourses = document.querySelectorAll(".important");

      allImportantCourses.forEach(function(course) {
        course.style.backgroundColor = "#d4edda";
        course.style.border = "2px solid #27ae60";
        course.style.padding = "12px";
      });

      showOutput(
        "Method: querySelectorAll()\n\n" +
        "It selects all elements that match a CSS selector.\n\n" +
        "Selector used: .important\n" +
        "Number of important courses selected: " + allImportantCourses.length
      );
    }

    function resetPage() {
      location.reload();
    }