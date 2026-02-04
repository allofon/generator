document.addEventListener("DOMContentLoaded", () => {

  // 🔹 Predikat (URI:er)
  const predicates = [
    "http://purl.org/dc/terms/title",
    "http://purl.org/dc/terms/creator",
    "http://purl.org/dc/terms/date",
    "http://purl.org/dc/terms/publisher",
    "http://purl.org/dc/terms/language",
    "http://RDVocab.info/Elements/rda/placeOfPublication"
  ];

  // 🔹 Verk (Work-URI:er)
  // Byt ut / fyll på med riktiga Libris-URI:er
  const workURIs = [
    "https://libris.kb.se/1jb7l1dc3mxhj3p",
    "https://libris.kb.se/q0fj7hrzn3wcf0bb",
    "https://libris.kb.se/bvnq1dqn49mpwgq",
    "https://libris.kb.se/dwpmmmwq4xcckf3",
    "https://libris.kb.se/r9w12x1ppmb20ql2",
    "https://libris.kb.se/k2bqg0t4h9c87h28",
    "https://libris.kb.se/9sl5jwdm5g24vgg",
    "https://libris.kb.se/r934ffm34hvxw4w",
    "https://libris.kb.se/tb4rwtc50wtltk7",
    "https://libris.kb.se/cv4j8tmh91zdwhtv",
    "https://libris.kb.se/2kccw4sd3rvg66h",
    "https://libris.kb.se/l2sjvh6zjpbf6tp3",
    "https://libris.kb.se/v6d2f50xsj25kkbb",
    "https://libris.kb.se/nz4hvk4nlvl4l3v9",
    "https://libris.kb.se/h1np9nqcf7j2bprs",
  
  ];

  function randomWorkURI() {
    return workURIs[Math.floor(Math.random() * workURIs.length)];
  }

  function randomPredicate() {
    return predicates[Math.floor(Math.random() * predicates.length)];
  }

  function generateTask() {
    const workURI = randomWorkURI();
    const predicate = randomPredicate();

    const subjectEl = document.getElementById("subject");
    subjectEl.textContent = `<${workURI}>`;
    subjectEl.href = workURI;

    const predicateEl = document.getElementById("predicate");
    predicateEl.textContent = `<${predicate}>`;
    predicateEl.href = predicate;

    document.getElementById("answer").value = "";
  }

  document
    .getElementById("newTask")
    .addEventListener("click", generateTask);

  document
    .querySelectorAll(".copyBtn")
    .forEach(button => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const text =
          document.getElementById(targetId).textContent;

        navigator.clipboard.writeText(text);
      });
    });

  generateTask();
});

