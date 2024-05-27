import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

interface GiscusComment {
  isEnableReaction?: boolean;
}

const GiscusComment = ({ isEnableReaction = false }: GiscusComment) => {
  const { theme } = useTheme();

  return (
    <div className='mb-2 mt-5'>
      <Giscus
        repo='h4MeMengoding/hame.my.id'
        repoId='R_kgDOMATNKQ'
        category='General'
        categoryId='DIC_kwDOMATNKc4CfoM4'
        mapping='pathname'
        reactionsEnabled={isEnableReaction ? '1' : '0'}
        emitMetadata='1'
        inputPosition='top'
        theme={theme === 'dark' ? 'transparent_dark' : 'light'}
        lang='id'
        loading='lazy'
      />
    </div>
  );
};

export default GiscusComment;
