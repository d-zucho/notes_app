const notes = [];

const filters = {
	filterText: '',
};

// Add new todo to list
document.querySelector('#new-note-form').addEventListener('submit', function(e) {
	e.preventDefault();

	//assign input text as note title
	const noteTitle = e.target.elements.noteTitleText.value;

	// add note object to notes array
	notes.push({
		title: noteTitle,
		body: '',
	});
	e.target.elements.noteTitleText.value = '';
});
