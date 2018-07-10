import React from 'react';
import { display, space, width } from 'styled-system';
import ProjectImg from './ProjectImg';
import { Column, Row } from '../grid';
import Text from '../shared/Text';

const HowCouldContent = Text.extend`
  font-weight: 500;
  font-style: italic;
  font-stretch: normal;
  letter-spacing: normal;
  ${display};
  ${space};
  ${width};
`;

const MARGIN_BOTTOM = '32px;';

const content = `How could content creators tell a story keeping the viewers engaged,
          in a 360 environment where viewers have full of freedom to explore?`;
const DescriptionRow = () => (
  <Row flexWrap="wrap">
    <Column mb="32px" width={[1, 1, 1, 1, 1 / 2, 1 / 2]}>
      <div>
        <HowCouldContent
          mb={MARGIN_BOTTOM}
          mx="auto"
          display={['block', 'block', 'block', 'block', 'none', 'none']}
          lineHeight={[1.2, 1.2, 1.2, 1.2, 1.25, 1.25]}
          fontSize={['20px', '20px', '20px', '20px', '32px', '32px']}
          width={[1, 6 / 8, 6 / 8, 8 / 12, 1, 1]}>
          {content}
        </HowCouldContent>
        <p>
          Audio player software is used to play back sound recordings in one of
          the many formats available for computers today. It can also play back
          music CDs. There is audio player software that is native to the
          computer’s operating system (Windows, Macintosh, and Linux) and there
          are web-based audio players. This article discusses the local computer
          audio players. Advantages of computer audio player software.
        </p>
        <br />
        <p>
          The main advantage of a computer audio player is that you can play
          your audio CDs and there is no longer any need to have a separate CD
          player. However the capabilities of the computer audio player go
          beyond just playing traditional music CDs. You can also play sound
          clips in one of the many audio formats found in the information
          technology industry today. The MP3 format is a standard whereby a high
          rate of compression can be achieved on sound files allowing the
          ability to store large numbers of them on hard disk. Another advantage
          is when the computer audio player has ripping capability you can
          extract a sample clip from the sound track for internet posting or
          emailing. Audio players in the form of portable MP3 players like
          Apple’s iPod are extremely advantageous due to their long battery life
          and capability to be carried practically anywhere. Choosing and using
          a computer audio player Windows comes with Windows Media Player
          already installed. Realplayer is a free download as well. There are
          other free products such as Winamp (Windows only). One important
          feature you want to look for when choosing an audio player beyond what
          is packaged with your operating system is the sound filtering
          capabilities. It should at least have a graphic equalizer where you
          can adjust for poor quality sound files. Look for other features like
          the ability to rip sound tracks and change the skins of the computer
          audio player.
        </p>
        <br />
        <p>
          The demand for the computer audio player Demand is driven by price and
          the free audio players like Windows Media Player will remain popular
          when it comes to playing audio on the computer. Where people are
          spending more of their money is on the portable MP3 players like
          Apple’s iPod. Apple makes a free computer audio player for the
          computer called iTunes and it is used to organize play lists and
          transfer sound files to the iPod player. Typically, you download
          iTunes and install it on your computer and then you have an integrated
          environment to import different types of Podcasts and audio for
          exporting to the iPod player itself. Plus iTunes can be used as a
          standalone computer audio player. But more and more you will see the
          demand for mobile computer audio players to increase because of their
          convenience and portability. Demand is driven by price and the free
          audio players like Windows Media Player will remain popular when it
          comes to playing audio on the computer. Where people are spending more
          of their money is on the portable MP3 players like Apple’s iPod. Apple
          makes a free computer audio player for the computer called iTunes and
          it is used to organize play lists and transfer sound files to the iPod
          player.
        </p>
      </div>
    </Column>
    <Column display="flex" width={[1, 1, 1, 1, 1 / 2, 1 / 2]}>
      <div>
        <HowCouldContent
          mb={MARGIN_BOTTOM}
          display={['none', 'none', 'none', 'none', 'block', 'block']}
          lineHeight={[1.2, 1.2, 1.2, 1.2, 1.25, 1.25]}
          fontSize={['20px', '20px', '20px', '20px', '32px', '32px']}>
          {content}
        </HowCouldContent>

        <ProjectImg
          mb={MARGIN_BOTTOM}
          display="block"
          alt="project display"
          src="https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg"
          description="This is the description for the image above. We could have a short description/ a long description, hopefully it won’t exceed 3 lines."
        />

        <HowCouldContent
          mb={MARGIN_BOTTOM}
          mx="auto"
          display="block"
          lineHeight={[1.2, 1.2, 1.2, 1.2, 1.25, 1.25]}
          fontSize={['20px', '20px', '20px', '20px', '32px', '32px']}
          width={[1, 6 / 8, 6 / 8, 8 / 12, 1, 1]}>
          “Audio player software is used to play recordings in one of the many
          formats available for computers today. And we need another line for
          showing layout.”
        </HowCouldContent>

        <ProjectImg
          mb="24px"
          display="block"
          alt="project display"
          src="https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg"
          description="This is the description for this image above."
        />

        <ProjectImg
          alt="project display"
          src="https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg"
          description="This is the description for this image above."
        />
      </div>
    </Column>
  </Row>
);

export default DescriptionRow;
