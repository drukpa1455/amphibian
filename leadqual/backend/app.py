from flask import Flask, request, jsonify
from langchain_openai import OpenAI
import openai
from typing import Any

app = Flask(__name__)

# Load OpenAI API Key
openai.api_key = 'your_openai_api_key'

# Initialize LangChain
llm = OpenAI(api_key='your_openai_api_key')

@app.route('/chat', methods=['POST'])
def chat() -> Any:
    user_input: str = request.json.get('message')
    response: str = llm(user_input)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
