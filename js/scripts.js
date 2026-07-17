const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu-icon');
const closeSidebar = document.getElementById('close-sidebar');

menuIcon.addEventListener('click', () => {
  sidebar.style.right = '0';
});

closeSidebar.addEventListener('click', () => {
  sidebar.style.right = '-100%';
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    sidebar.style.right = '-100%';
  }
});

// Auto slide the slider for every 3 seconds 
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let index = 0;

function autoSlide() {
  index = (index + 1) % slides.length;
  const slideWidth = slides[0].clientWidth;
  slider.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  });
}

setInterval(autoSlide, 3000); // change every 4 seconds


//account

//Toogle Password Visibility
function showPwd() {
    var x = document.getElementById('pwd');
    var icon = document.getElementById('togglePwd');

    if (x.type == 'password') {
        x.type = 'text';
        icon.textContent = 'visibility';
    }
    else {
        x.type = 'password';
        icon.textContent = 'visibility_off'
    }
}

// Store sign-up data in localStorage on form submit
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      fname: this.fname.value,
      lname: this.lname.value,
      email: this.email.value,
      pwd: this.pwd.value, // Note: Don't store passwords like this in real apps
      address: this.address.value,
      postcode: this.postcode.value,
      city: this.city.value,
      state: this.state.value,
    };

    // Save to localStorage
    localStorage.setItem("userData", JSON.stringify(formData));

    alert("Sign up successfully! Redirecting to login page...");
    window.location.href = "account.html";
  });
}

// Validate login against localStorage data
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredEmail = this.email.value;
    const enteredPwd = this.pwd.value;

    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData && enteredEmail === storedData.email && enteredPwd === storedData.pwd) {
      alert("Login successfully! Redirecting to home page...");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
}

//Password Message
window.onload = function() {
  var myInput = document.getElementById("pwd");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var symbol = document.getElementById("symbol")
  var length = document.getElementById("length");

  // When the user clicks on the password field, show the message box
  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }

  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate special character
    var symbolChars = /[!@#$%^&*(),.?":{}|<>_\-+=\[\]\\;/~`]/g;
    if(myInput.value.match(symbolChars)) {
      symbol.classList.remove("invalid");
      symbol.classList.add("valid");
    } else {
      symbol.classList.remove("valid");
      symbol.classList.add("invalid");
    }

    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }
};
 // Apply fade-in on page load
  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
  });

  // Add smooth transition on link clicks
  document.querySelectorAll('a[href]').forEach(link => {
    const target = link.getAttribute("target");

    // Only transition if link goes to same tab
    if (!target || target === "_self") {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Ignore anchor links and external links
        if (href.startsWith("#") || this.host !== window.location.host) return;

        e.preventDefault(); // Stop default nav
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 200); // Duration should match CSS transition
      });
    }
  });

// Coupon application functionality
const couponButton = document.querySelector('#coupon button');
if (couponButton) {
  couponButton.addEventListener('click', function(e) {
    e.preventDefault();
    const couponInput = document.querySelector('#coupon input');
    const couponCode = couponInput.value.trim();
    
    if (couponCode) {
      alert(`Coupon "${couponCode}" applied successfully!`);
      couponInput.value = ''; 
    } else {
      alert('Please enter a coupon code');
    }
  });
}

//Contact validation
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactform');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = contactForm.querySelector('[name="name"]');
      const emailInput = contactForm.querySelector('[name="email"]');
      const subjectInput = contactForm.querySelector('[name="subject"]');
      const messageInput = contactForm.querySelector('[name="message"]');
      
      let isValid = true;
      
      const markInvalid = (field) => {
        field.style.border = '2px solid red';
        isValid = false;
      };
      
      const markValid = (field) => {
        field.style.border = '1px solid #9f8f80';
      };
      
      // Validate each field
      if (!nameInput.value.trim()) {
        markInvalid(nameInput);
      } else {
        markValid(nameInput);
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
        markInvalid(emailInput);
      } else {
        markValid(emailInput);
      }
      
      if (!subjectInput.value.trim()) {
        markInvalid(subjectInput);
      } else {
        markValid(subjectInput);
      }
      
      if (!messageInput.value.trim()) {
        markInvalid(messageInput);
      } else {
        markValid(messageInput);
      }
      
      // Submit if valid
      if (isValid) {
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      } else {
        alert('Please fill in all required fields correctly.');
        const firstInvalid = contactForm.querySelector('[style*="red"]');
        firstInvalid?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
});