import {useCallback, useEffect, useState} from 'react'

function App() {
    const [length, setLength] = useState(8);
    const [isNumber, setIsNumber] = useState(false);
    const [isSymbol, setIsSymbol] = useState(false);
    const [password, setPassword] = useState('');

    const passwrdGenerator = useCallback(() => {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let number = '0123456789';
        let symbol = '!@#$%^&*()_+';
        let passwrd = '';
        if (isSymbol) {
            chars += symbol;
        }
        if (isNumber) {
            chars += number;
        }

        for (let i = 0; i < length; i++) {
            let randomChar = Math.floor(Math.random() * chars.length+1); // gives random index
            passwrd += chars.charAt(randomChar);
        }
        setPassword(passwrd);
    }, [length, isNumber, isSymbol, setPassword]);

    useEffect(() => {
        passwrdGenerator();
    }, [length,isNumber,isSymbol,passwrdGenerator]);

    return (
        <>

            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8
                        bg-gradient-to-r from-orange-300 to-green-100 text-orange-500"
            >
                <h1 className='text-pink-400 font-bold text-center my-3'>Password generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3"
                        placeholder="Password"
                        readOnly={true}
                        // ref={passwordRef}
                    />
                    <button
                        // onClick={copyPasswordToClipboard}
                        className='outline-none bg-gradient-to-r to-orange-500 from-green-500
                     text-white px-3 py-0.5 shrink-0'
                    >copy
                    </button>

                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="range"
                            min={6}
                            max={20}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => setLength(e.target.value)}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={isNumber}
                            id="numberInput"
                            onChange={() => {
                                setIsNumber((prev) => !prev);
                            }}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={isSymbol}
                            id="characterInput"
                            onChange={() => {
                                setIsSymbol((prev) => !prev)
                            }}
                        />
                        <label htmlFor="characterInput">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
