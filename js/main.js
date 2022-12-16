// Sticky Desktop
$(window).scroll(function () {
  var hTop = $(".navbar.navbar-expand-lg");
  if ($(this).scrollTop() >= hTop.outerHeight() * 3) {
    hTop.addClass("fixed");
  } else {
    hTop.removeClass("fixed");
    $(".right .hero-search").hide(100);
  }
});

// Sticky Modal Sidebar
$(".modal-body").scroll(function () {
  var hTop = $(".sticky-modal-sidebar");
  if ($(this).scrollTop() >= hTop.outerHeight() * 1) {
    hTop.addClass("fixed");
  } else {
    hTop.removeClass("fixed");
  }
});

// Sticky Tabs
$(window).scroll(function () {
  var hTop = $("#tabs");
  var overview = $(".nav-item .overview");
  if ($(this).scrollTop() >= hTop.outerHeight() * 3) {
    hTop.addClass("sticky-tabs");
  } else {
    hTop.removeClass("sticky-tabs");
    overview.addClass("active");
  }
});

// Sticky dr sidebar
$(window).scroll(function () {
  var sidebar = $(".sidebar-doctor-detail .doctor-wrapper");
  if ($(this).scrollTop() >= sidebar.outerHeight() * 3) {
    sidebar.addClass("show");
  } else {
    sidebar.removeClass("show");
  }
});

// Sticky Mobile
$(window).scroll(function () {
  var hTop = $(".navbar.navbar-expand-sm");
  if ($(this).scrollTop() >= hTop.outerHeight() * 5) {
    hTop.addClass("fixed");
  } else {
    hTop.removeClass("fixed");
    $(".right .hero-search").hide(100);
  }
});

$(document).ready(function () {
  $(".search-close-button").click(function (e) {
    $(".right .hero-search").hide(100);
    return false;
  });
  $(".search-button").click(function (e) {
    $(".right .hero-search").css("display", "flex");
    $(".right .hero-search input").focus();
    return false;
  });
});

$('[required="required"]').closest(".form-group").addClass("required");

// Register Tel Input
$(function () {
  var input = document.querySelector("#tel_number");
  window.intlTelInput(input, {
    utilsScript: "/js/telinput/js/utils.js",
    initialCountry: "us",
    separateDialCode: true,
  });
});

// AOS
$(document).ready(function () {
  AOS.init();
  AOS.init({
    once: true,
    disable: "mobile",
    offset: 50,
  });
});

$(".filter-dropdown .dropdown-menu").on("click", function (e) {
  e.stopPropagation();
});

// Count Checkbox - Treatments
var treatmentsCount = function () {
  var treatments = $("input[name='treatments']:checked").length;
  var countclass = $(".treatments .count-checked");
  var containerclass = $(".filter-dropdown.treatments");

  if (treatments > 0) {
    $(countclass).text(treatments);
    countclass.removeClass("d-none");
    containerclass.addClass("active");
  } else {
    $(countclass).text(" ");
    countclass.addClass("d-none");
    containerclass.removeClass("active");
  }
};
$("input:checkbox").on("change", function () {
  treatmentsCount();
});

// Count Checkbox - City
var cityCount = function () {
  var city = $("input[name='city']:checked").length;
  var countclass = $(".city .count-checked");
  var containerclass = $(".filter-dropdown.city");

  if (city > 0) {
    $(countclass).text(city);
    countclass.removeClass("d-none");
    containerclass.addClass("active");
  } else {
    $(countclass).text(" ");
    countclass.addClass("d-none");
    containerclass.removeClass("active");
  }
};
$("input:checkbox").on("change", function () {
  cityCount();
});

// Count Checkbox - Body Areas
var bodyCount = function () {
  var city = $("input[name='body']:checked").length;
  var countclass = $(".bodyareas .count-checked");
  var containerclass = $(".filter-dropdown.bodyareas");

  if (city > 0) {
    $(countclass).text(city);
    countclass.removeClass("d-none");
    containerclass.addClass("active");
  } else {
    $(countclass).text(" ");
    countclass.addClass("d-none");
    containerclass.removeClass("active");
  }
};
$("input:checkbox").on("change", function () {
  bodyCount();
});

// Count Checkbox - Concerns
var concernCount = function () {
  var city = $("input[name='concern']:checked").length;
  var countclass = $(".concerns .count-checked");
  var containerclass = $(".filter-dropdown.concerns");

  if (city > 0) {
    $(countclass).text(city);
    countclass.removeClass("d-none");
    containerclass.addClass("active");
  } else {
    $(countclass).text(" ");
    countclass.addClass("d-none");
    containerclass.removeClass("active");
  }
};
$("input:checkbox").on("change", function () {
  concernCount();
});

// Rating Selection
const radioRatings = document.querySelectorAll('input[name="rating"]');
for (const radioButton of radioRatings) {
  radioButton.addEventListener("change", showRating);
}
function showRating(e) {
  console.log(e);
  if (this.checked) {
    document.querySelector(".ratings .dropdown a").innerText = `${this.value}`;
    $(".filter-dropdown.ratings").addClass("active");
  }
}

// Years of Experience
const radioYears = document.querySelectorAll('input[name="years"]');
for (const radioButton of radioYears) {
  radioButton.addEventListener("change", showYears);
}
function showYears(e) {
  console.log(e);
  if (this.checked) {
    document.querySelector(".yearsofexperience .dropdown a").innerText = `${this.value}`;
    $(".filter-dropdown.yearsofexperience").addClass("active");
  }
}

// Read More
var showChar = 400;
var ellipsestext = "...";
var moretext = "more";
var lesstext = "less";
$(".more").each(function () {
  var content = $(this).html();

  if (content.length > showChar) {
    var c = content.substr(0, showChar);
    var h = content.substr(showChar, content.length - showChar);

    var html =
      c +
      '<span class="moreellipses">' +
      ellipsestext +
      '&nbsp;</span><span class="morecontent"><span>' +
      h +
      '</span>&nbsp;&nbsp;<a href="" class="morelink">' +
      moretext +
      "</a></span>";

    $(this).html(html);
  }
});

$(".morelink").click(function () {
  if ($(this).hasClass("less")) {
    $(this).removeClass("less");
    $(this).html(moretext);
  } else {
    $(this).addClass("less");
    $(this).html(lesstext);
  }
  $(this).parent().prev().toggle();
  $(this).prev().toggle();
  return false;
});

// Count Review Images
$(".review-item").each(function () {
  var numImgTags = $(this).find(".images img").length;
  var newNum = numImgTags - 4;
  $(this).find(".more-images span").text(newNum);
  if (numImgTags <= 4) {
    $(this).find(".more-images").hide();
  }
});
