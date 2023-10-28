import { useState } from 'react';
import './App.css';
import ExtractText from './components/ExtractText';
import ExtractAudio from './components/ExtractAudio';
import UpcomingFeature from './components/UpcomingFeatures';

function App() {

    const [selectedOption, setSelectedOption] = useState('0');

    return (
        <div className="container w-100 h-100">
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <div className="introContent">
                        <h1>Choose best option according to your needs.</h1>
                    </div>
                </div>
                <div className="col-2">
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                </div>
                <div className="col-3">
                   <div 
                        className={selectedOption == '0' ? 'optionBoxSelected' : 'optionBox'} 
                        onClick={()=>{setSelectedOption('0')}}
                    >
                       Extract Text from video
                   </div>
                </div>
                <div className="col-3">
                <div 
                    className={selectedOption == '1' ? 'optionBoxSelected' : 'optionBox'}
                    onClick={()=>{setSelectedOption('1')}}
                >
                       Extract audio from video
                   </div>
                </div>
                <div className="col-3">
                </div>
            </div>

            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-3">
                </div>
                <div className="col-6">
                    {
                        selectedOption == "0" &&  <ExtractText />
                    }
                    {
                        selectedOption == "1" &&  <ExtractAudio />
                    }
                </div>
                <div className="col-3">
                </div>
            </div>

            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <div className="introContent">
                        Welcome to [Your Website Name], your one-stop destination for processing audio and video files with ease. Our cutting-edge technology allows you to effortlessly extract text from your multimedia content. Whether you need to transcribe interviews, create subtitles, or analyze spoken content, we've got you covered. Say goodbye to manual transcription and let our platform streamline the process for you. Unlock the power of your audio and video files with [Your Website Name] today
                    </div>
                </div>
                <div className="col-2">
                </div>

            </div>

            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <UpcomingFeature />
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>
    );
}

export default App;