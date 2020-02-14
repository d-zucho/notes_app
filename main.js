let notes = [];

const filters = {
	filterText: '',
};

// Check for existing saved Data
const notesJSON = localStorage.getItem('notes');

if (notesJSON !== null) {
	notes = JSON.parse(notesJSON);
}

/**  ---  Display Notes  ---  */
const renderNotes = function(notes, filters) {
	const filteredNoted = notes.filter(function(note) {
		return note.title.toLowerCase().includes(filters.filterText.toLowerCase());
	});

	filteredNoted.forEach(note => {
		const noteEl = document.createElement('div');
		const txt = document.createElement('span');

		if (note.title.length > 0) {
			txt.textContent = note.title;
		} else {
			txt.textContent = 'Unnamed Note';
		}

		//create note DOM object
		const editButton = document.createElement('button');
		editButton.textContent = 'edit';
		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'x';

		noteEl.appendChild(txt);
		noteEl.appendChild(editButton);
		noteEl.appendChild(deleteButton);

		document.querySelector('#notes').appendChild(noteEl);
	});
};

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
