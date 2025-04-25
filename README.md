# AI Course Description Generator

A web application that generates professional course descriptions using AI. Built with Flask and Groq AI.

## Features

- Generate course descriptions based on title and category
- Support for multiple languages
- Clean and modern UI
- Real-time generation with loading indicators
- Error handling and validation

## Prerequisites

- Python 3.8 or higher
- Groq API key (get it from [Groq Console](https://console.groq.com/))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/course_description_generator.git
cd course_description_generator
```

2. Create and activate a virtual environment:
```bash
# Windows
python -m venv venv
.\venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the project root with the following variables:
```
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama3-8b-8192
TEMPERATURE=0.7
TIMEOUT=30
PORT=5000
DEBUG=True
ALLOWED_ORIGINS=*
```

## Usage

1. Start the Flask server:
```bash
python main.py
```

2. Open your web browser and navigate to:
```
http://localhost:5000
```

3. Enter the course title and category, select a language, and click "Generate Description"

## Project Structure

```
course_description_generator/
├── main.py              # Flask application
├── index.html           # Main HTML template
├── style.css            # CSS styles
├── script.js            # JavaScript functionality
├── requirements.txt     # Python dependencies
└── README.md           # Project documentation
```

## Technologies Used

- Flask (Python web framework)
- Groq AI (Language model)
- HTML5
- CSS3
- JavaScript (ES6+)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 