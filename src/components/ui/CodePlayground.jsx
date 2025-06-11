import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiRefreshCw } from 'react-icons/fi';

const CodePlayground = () => {
  const [code, setCode] = useState(`// Try modifying this code!
function greet(name) {
  return "Hello, " + name + "!";
}

// Call the function
const message = greet("Katisa");
document.getElementById("output").innerHTML = message;`);
  
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const runCode = () => {
    setIsLoading(true);
    setError('');
    
    try {
      // Create a sandbox to run the code
      const sandbox = document.createElement('iframe');
      sandbox.style.display = 'none';
      document.body.appendChild(sandbox);
      
      // Create a console.log replacement that captures output
      let consoleOutput = '';
      const originalConsoleLog = console.log;
      sandbox.contentWindow.console = {
        log: function(message) {
          consoleOutput += message + '\\n';
          originalConsoleLog.apply(console, arguments);
        }
      };
      
      // Create HTML content for the sandbox
      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Code Playground</title>
          </head>
          <body>
            <div id="output"></div>
            <script>
              try {
                ${code}
              } catch(e) {
                document.getElementById("output").innerHTML = "Error: " + e.message;
                parent.postMessage({ type: 'error', message: e.message }, '*');
              }
            </script>
          </body>
        </html>
      `;
      
      // Listen for error messages
      window.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'error') {
          setError(event.data.message);
        }
      });
      
      // Write the HTML to the iframe
      sandbox.contentDocument.open();
      sandbox.contentDocument.write(html);
      sandbox.contentDocument.close();
      
      // Get the output after a short delay
      setTimeout(() => {
        try {
          const outputElement = sandbox.contentDocument.getElementById('output');
          setOutput(outputElement ? outputElement.innerHTML : consoleOutput || 'No output');
          document.body.removeChild(sandbox);
        } catch (e) {
          setError(e.message);
        }
        setIsLoading(false);
      }, 500);
      
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  };

  const resetCode = () => {
    setCode(`// Try modifying this code!
function greet(name) {
  return "Hello, " + name + "!";
}

// Call the function
const message = greet("Katisa");
document.getElementById("output").innerHTML = message;`);
  };

  // Run the code on initial load
  useEffect(() => {
    runCode();
  }, []);

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <h3 className="text-white font-medium">Interactive Code Playground</h3>
        <div className="flex space-x-2">
          <button
            onClick={runCode}
            className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
            disabled={isLoading}
          >
            <FiPlay className="mr-1" /> Run
          </button>
          <button
            onClick={resetCode}
            className="flex items-center bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            <FiRefreshCw className="mr-1" /> Reset
          </button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 divide-x divide-gray-700">
        {/* Code editor */}
        <div className="bg-gray-900 p-4">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 bg-gray-800 text-green-400 font-mono p-4 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
            spellCheck="false"
          />
        </div>
        
        {/* Output panel */}
        <div className="bg-gray-800 p-4">
          <div className="text-sm text-gray-300 mb-2">Output:</div>
          <div className="w-full h-64 bg-gray-900 text-white font-mono p-4 rounded border border-gray-700 overflow-auto">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
              </div>
            ) : error ? (
              <div className="text-red-400">{error}</div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: output }} />
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 px-4 py-3 text-xs text-gray-400">
        <p>Try modifying the code and click "Run" to see the results. This playground demonstrates simple JavaScript functionality.</p>
      </div>
    </div>
  );
};

export default CodePlayground;
