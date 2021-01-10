function sep() {
    return "&nbsp;|&nbsp;";
}

function link(filename, text) {
    return '<a href="/' + filename + '.html" class="navbar-link">' + text + '</a>';
}

var bstr = link("index", "About") +
    sep() +
    link("blog", "Blog") +
    sep() +
    link("contact", "Contact") +
    sep() +
    link("photography", "Photography");


function banner() {
    return '<center>' + bstr + '</center>';
}
