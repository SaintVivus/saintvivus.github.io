// Blog data
const posts = [
  {
    title: 'On the structure of a syllogism',
    date: '25.05.03 12:18',
    category: 'Uncategorized',
    author: 'Joan Smith',
    content: `A syllogism is discourse in which, certain things being stated, something other than what is stated follows of necessity from their being so. For example, if all men are mortal, and Socrates is a man, it follows that Socrates is mortal. This is the essence of deductive reasoning: from general premises, we derive a necessary conclusion. It is by such means that we demonstrate knowledge, not from opinion or persuasion, but from things that must be the case.`
  },
  {
    title: 'Llullian Circles',
    date: '25.05.03 12:14',
    category: 'Uncategorized',
    author: 'Joan Smith',
    content: `Llullian Circles are a method of logical calculation invented by Ramon Llull. They are used to combine concepts and generate new knowledge by rotating wheels inscribed with terms.`
  },
  {
    title: 'The Pythagorean Theorem',
    date: '25.05.03 12:11',
    category: 'Mathematics',
    author: 'Joan Smith',
    content: `The Pythagorean Theorem states that in a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.`
  },
  {
    title: 'Code is Poetry',
    date: '23.04.02 01:46',
    category: 'Philosophy',
    author: 'Joan Smith',
    content: `Code is Poetry is a phrase that celebrates the artistry and creativity of programming.`
  },
  {
    title: 'Ozymandias',
    date: '23.02.14 07:46',
    category: 'Poetry',
    author: 'Joan Smith',
    content: `I met a traveller from an antique land... (Shelley's poem continues)`
  },
  {
    title: 'Crete',
    date: '23.02.12 07:48',
    category: 'Travel',
    author: 'Joan Smith',
    content: `Crete is the largest and most populous of the Greek islands, known for its varied terrain and rich history.`
  },
  {
    title: 'Hello World!',
    date: '23.01.19 02:23',
    category: 'General',
    author: 'Joan Smith',
    content: `Hello World! is often the first program written when learning a new programming language.`
  }
];
// About info
const aboutText = `Joan Smith is a writer, mathematician, and philosopher. This blog is a collection of thoughts, essays, and poetry.\n\nContact: joan.smith@email.com`;

// Routing
let currentPage = 'home';
let selectedIndex = null;
let currentPostIndex = null;

function goHome() {
  currentPage = 'home';
  selectedIndex = null;
  render();
}
function goAbout() {
  currentPage = 'about';
  render();
}
function goPost(idx) {
  currentPage = 'post';
  currentPostIndex = idx;
  render();
}
function selectItem(idx) {
  selectedIndex = idx;
  render();
}
function goPrev() {
  if (currentPostIndex > 0) {
    goPost(currentPostIndex - 1);
  }
}
function goNext() {
  if (currentPostIndex < posts.length - 1) {
    goPost(currentPostIndex + 1);
  }
}

function render() {
  const main = document.getElementById('main');
  const footer = document.getElementById('footer');
  if (currentPage === 'home') {
    let html = `<div class='post-list'>`;
    posts.forEach((post, idx) => {
      html += `<div class='post-item${selectedIndex===idx?' selected':''}' onclick='goPost(${idx})' onmouseover='selectItem(${idx})' onmouseout='selectItem(null)'>
        <span class='post-title'>${post.title}</span>
        <span class='post-date'>${post.date}</span>
      </div>`;
    });
    html += `</div>`;
    html += `<div style='color:#666;margin-top:40px;'>$previous = ;<br>$next = ;</div>`;
    main.innerHTML = html;
    footer.innerHTML = `code_is_poetry( '<span style='color:#39ffca;'>Designed with WordPress</span>' );`;
  } else if (currentPage === 'post') {
    const post = posts[currentPostIndex];
    let html = `<div style='color:#fff;font-size:1.3em;margin-bottom:20px;'>$title = <span style='color:#ff9939;'>${post.title}</span>;</div>`;
    html += `<div style='color:#666;'>$content = [<br><span class='blog-content'>${post.content}</span><br>];</div>`;
    html += `<div class='blog-meta'>
      <span>$date = <span style='color:#39ffca;'>${post.date}</span>;</span>
      <span>$category = <span style='color:#39ffca;'>${post.category}</span>;</span>
      <span>$author = <span style='color:#39ffca;'>${post.author}</span>;</span>
    </div>`;
    html += `<div class='nav-links'>
      $previous = ${currentPostIndex > 0 ? `<span class='nav-link' onclick='goPrev()'>${posts[currentPostIndex-1].title}</span>` : ''};<br>
      $next = ${currentPostIndex < posts.length-1 ? `<span class='nav-link' onclick='goNext()'>${posts[currentPostIndex+1].title}</span>` : ''};
    </div>`;
    main.innerHTML = html;
    footer.innerHTML = `code_is_poetry( '<span style='color:#39ffca;'>Designed with WordPress</span>' );`;
  } else if (currentPage === 'about') {
    main.innerHTML = `<div class='about-content'>${aboutText}</div>`;
    footer.innerHTML = `code_is_poetry( '<span style='color:#39ffca;'>Designed with WordPress</span>' );`;
  }
}
// Initial render
window.onload = render;
