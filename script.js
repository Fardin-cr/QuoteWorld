/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/* Container */
.container {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  text-align: center;
}

/* Header */
h1 {
  font-size: 2em;
  color: #4a90e2;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.2em;
  margin-bottom: 15px;
  color: #666;
}

/* Dropdown */
select {
  padding: 10px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Buttons */
button {
  padding: 10px 20px;
  margin: 10px 5px;
  font-size: 1em;
  color: #fff;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover {
  background-color: #357ab8;
}

/* Quote Display */
#quoteDisplay {
  font-size: 1.2em;
  font-style: italic;
  margin: 20px 0;
  padding: 10px;
  border: 1px dashed #ccc;
  border-radius: 5px;
  background: #f9f9f9;
  color: #555;
}

/* Modal Styling */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 400px;
}

.modal-content h2 {
  margin-bottom: 20px;
}

.share-buttons a {
  display: inline-block;
  margin: 10px;
  text-decoration: none;
  color: #333;
  font-size: 1.2em;
  transition: color 0.3s ease;
}

.share-buttons i {
  margin-right: 8px;
  font-size: 1.5em;
  color: #4a90e2;
}

.share-buttons a:hover i {
  color: #357ab8;
}

.share-buttons a:hover {
  color: #357ab8;
}

/* Close Button */
.modal-content button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #e74c3c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal-content button:hover {
  background-color: #c0392b;
}

/* Responsive Design */
@media (max-width: 600px) {
  h1 {
    font-size: 1.8em;
  }

  button {
    width: 100%;
  }

  select {
    width: 100%;
  }
}
