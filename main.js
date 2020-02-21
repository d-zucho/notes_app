let notes = [];

const filters = {
	filterText: '',
};

// Check for existing saved Data
const notesJSON = localStorage.getItem('notes');

if (notesJSON !== null) {
	notes = JSON.parse(notesJSON);
}

renderNotes(notes, filters);
/**  -- Add new todo to list */
document.querySelector('#new-note-form').addEventListener('submit', function(e) {
	e.preventDefault();

	//assign input text as note title
	const noteTitle = e.target.elements.noteTitleText.value;

	// add note object to notes array
	notes.push({
		id: uuidv4(),
		title: noteTitle,
		body: '',
	});

	localStorage.setItem('notes', JSON.stringify(notes));

	e.target.elements.noteTitleText.value = '';

	document.querySelector('#notes').innerHTML = '';
	renderNotes(notes, filters);
});

/**  -- Listen for filterText --   */
document.querySelector('#filterText').addEventListener('input', function(e) {
	filters.filterText = e.target.value;
	renderNotes(notes, filters);
});

/**  -- Delete All Notes Button Event Listener */
document.querySelector('#deleteAll').addEventListener('click', function(e) {
	localStorage.clear();
	localStorage.setItem('notes', JSON.parse(notesJSON));
	renderNotes(notes, filters);
});
