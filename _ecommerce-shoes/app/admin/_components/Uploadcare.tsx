import * as LR from '@uploadcare/blocks';

LR.registerBlocks(LR);

export default function Uploadcare() {
    return (
        <div>   
         <lr-config
            ctx-name="my-uploader"
            pubkey="1fc81b3eadf3f1bdef5c"
maxLocalFileSizeBytes={10000000}
imgOnly={true}
sourceList="local, camera, facebook, gphotos, instagram"
          ></lr-config>
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.37.0/web/lr-file-uploader-regular.min.css`}
        class="my-config"
      />
      </div>
    )
}

