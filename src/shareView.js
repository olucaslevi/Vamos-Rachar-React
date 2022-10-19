import { 
    WhatsappShareButton,
    WhatsappIcon,
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon
} from 'react-share';

function shareView(){
    return(
        <div className="shareView">
            <h1>Compartilhar</h1>
            <div className="shareButtons">
                <WhatsappShareButton url="https://vamos-rachar.vercel.app/" title="Vamos Rachar!">
                    <WhatsappIcon size={32} round={true}/>
                </WhatsappShareButton>
                <FacebookShareButton url="https://vamos-rachar.vercel.app/" quote="Vamos Rachar!">
                    <FacebookIcon size={32} round={true}/>
                </FacebookShareButton>
                <TwitterShareButton url="https://vamos-rachar.vercel.app/" title="Vamos Rachar!">
                    <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>
                <FacebookMessengerShareButton url="https://vamos-rachar.vercel.app/" title="Vamos Rachar!">
                    <FacebookMessengerIcon size={32} round={true}/>
                </FacebookMessengerShareButton>
            </div>
        </div>
    );
}

export default shareView;