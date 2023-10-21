import logo from './logo.svg';
import './App.css';
import FileUpload from './components/FileUpload';

function App() {
    return (
        <div className="container w-100 h-100">
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <div className="introContent">
                        <h1>Extract text from video and audio</h1>
                    </div>
                </div>
                <div className="col-2">
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                </div>
                <div className="col-6">
                    <FileUpload />
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


function UpcomingFeature() {
    return (
        <div style={{ marginTop: 40 }}>
            <h3>Exciting Upcoming Features!</h3>
            <p>We're thrilled to announce a range of new features that will take your multimedia experience to the next level. At <strong>[Your Website Name]</strong>, we're constantly innovating to provide you with the best tools for managing and enhancing your audio and video content. Here's a sneak peek at what's coming soon:</p>

            <ol>
                <li>
                    <strong>Convert and Download Video to Audio:</strong><br />
                    Easily transform your video files into high-quality audio tracks. Whether you want to enjoy your favorite music on the go or extract audio from educational videos, our conversion feature will make it a breeze. Download your audio files in the format of your choice for ultimate flexibility.
                </li>
                <li>
                    <strong>Remove Copyright from Video:</strong><br />
                    Say goodbye to those pesky copyright issues! Our advanced copyright removal tool will help you strip copyrighted content from your videos while preserving the original quality. Create and share your content worry-free.
                </li>
                <li>
                    <strong>Create Clips from Video:</strong><br />
                    Break your long videos into bite-sized, shareable clips. Perfect for social media, presentations, or highlighting key moments in your videos. Our intuitive clip creation feature will make editing a breeze, helping you tell your story with precision.
                </li>
                <li>
                    <strong>And More:</strong><br />
                    We're not stopping there! Expect a host of additional enhancements and features designed to simplify your multimedia tasks. From improved user interfaces to enhanced compatibility with various file formats, we're committed to making <strong>[Your Website Name]</strong> your go-to platform for all things audio and video.
                </li>
            </ol>

            <p>Stay tuned for these exciting updates and watch as <strong>[Your Website Name]</strong> continues to empower you with the tools you need to manage and enhance your multimedia content effortlessly. We can't wait to see how these new features will elevate your creative and professional projects!</p>
        </div>
    )
}