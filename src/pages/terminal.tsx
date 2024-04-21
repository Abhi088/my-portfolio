import React, { useState, ChangeEvent, FormEvent } from 'react';

export const Terminal: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<string[]>([]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Here you can handle the input command and generate the output
        setOutput(prevOutput => [...prevOutput, `You typed: ${input}`]);
        setInput('');
    };

    const currentTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: '2-digit',
        minute: '2-digit'
    });
    const prompt = `visitor@domain.com:~$ ${currentTime}> `;

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold underline text-black mb-6">
                Welcome to My Terminal
            </h1>
            <div className="bg-black text-white p-4 rounded">
                <pre>{output.join('\n')}</pre>
                <form onSubmit={handleFormSubmit} style={{ display: 'flex' }}>
                    <p>{prompt}</p>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        className="bg-black text-white outline-none"
                    />
                </form>
            </div>
        </div>
    );
}