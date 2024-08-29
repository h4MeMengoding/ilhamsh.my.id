import { BiLeftArrowCircle as BackButton } from 'react-icons/bi';
import Typewriter from 'typewriter-effect';

import Button from '@/common/components/elements/Button';
import MDXComponent from '@/common/components/elements/MDXComponent';

interface AiResponsesProps {
  response: string;
  isAiFinished: boolean;
  onAiFinished: () => void;
  onAiClose: () => void;
}

const AiResponses = ({
  response,
  isAiFinished,
  onAiFinished,
  onAiClose,
}: AiResponsesProps) => {
  return (
    <>
      {response ? (
        response?.includes('```') ? (
          <MDXComponent>{response}</MDXComponent>
        ) : (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(response)
                .callFunction(() => {
                  onAiFinished();
                })
                .start();
            }}
            options={{
              delay: 10,
            }}
          />
        )
      ) : (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Ups! AI sepertinya hilang. \u00A0 😵‍💫 \u00A0\u00A0')
              .pauseFor(1000)
              .typeString('<br/><br/>')
              .typeString(
                `Sepertinya AI sedang melakukan liburan tak terjadwal ke Negeri Sebelah. Semoga ini membawa kembali beberapa kenang-kenangan yang jelas!. \u00A0\u00A0`,
              )
              .pauseFor(1000)
              .typeString('<br/><br/>')
              .typeString('Silahkan coba lagi nanti. \u00A0')
              .callFunction(() => {
                onAiFinished();
              })
              .start();
          }}
          options={{
            delay: 10,
          }}
        />
      )}

      {isAiFinished && (
        <div className='mt-6 flex justify-center transition-all duration-300'>
          <Button
            onClick={onAiClose}
            data-umami-event='Click Back from AI Response'
          >
            <BackButton />
            Kembali
          </Button>
        </div>
      )}
    </>
  );
};

export default AiResponses;
