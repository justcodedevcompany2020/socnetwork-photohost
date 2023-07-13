import Svg, { Circle, Mask, Path, Rect } from "react-native-svg"

export const HomeSvg = ({focused}) =>{
    if(focused){
        return <Svg
        width={41}
        height={37}
        viewBox="0 0 41 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Mask id="a" fill="#fff">
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.97 1.054a1.053 1.053 0 011.447 0l10.595 9.826c.238.222.375.541.375.877v11.23c0 .644-.492 1.166-1.099 1.166h-7.284c-.607 0-1.099-.522-1.099-1.165v-3.51c0-1.295-.99-2.344-2.212-2.344-1.221 0-2.211 1.05-2.211 2.344v3.51c0 .643-.492 1.165-1.1 1.165H10.1C9.492 24.153 9 23.63 9 22.988v-11.23c0-.337.137-.656.375-.877L19.97 1.053z"
        />
        </Mask>
        <Path
        d="M21.417 1.054l-.816.88.816-.88zm-1.447 0l.816.88-.816-.88zm12.042 9.826l.816-.88-.816.88zm-13.53 12.097h-1.2v.005l1.2-.005zm0 .01h1.2v-.004l-1.2.005zM9.375 10.882L8.56 10l.816.88zM22.233.173a2.253 2.253 0 00-3.08 0l1.633 1.76a.141.141 0 01-.093.032.14.14 0 01-.092-.032l1.632-1.76zm10.595 9.827L22.233.174l-1.632 1.76 10.595 9.826L32.828 10zm.76 1.756c0-.657-.268-1.3-.76-1.756l-1.632 1.76c-.009-.008-.01-.013-.01-.013l.001.01h2.4zm0 11.23v-11.23h-2.4v11.23h2.4zm-2.3 2.366c1.335 0 2.3-1.126 2.3-2.365h-2.4c0 .013-.005.01.004 0a.103.103 0 01.033-.022.158.158 0 01.063-.013v2.4zm-7.284 0h7.284v-2.4h-7.284v2.4zm-2.299-2.365c0 1.239.965 2.365 2.3 2.365v-2.4c.021 0 .044.005.063.013a.1.1 0 01.032.022c.01.01.005.013.005 0h-2.4zm0-3.51v3.51h2.4v-3.51h-2.4zm-1.011-1.144c.493 0 1.011.445 1.011 1.144h2.4c0-1.89-1.462-3.544-3.412-3.544v2.4zm-1.012 1.144c0-.699.518-1.144 1.012-1.144v-2.4c-1.95 0-3.412 1.653-3.412 3.544h2.4zm0 3.5v-3.5h-2.4v3.5h2.4zm0 .005v-.01l-2.4.01v.01l2.4-.01zm-2.3 2.37c1.335 0 2.3-1.126 2.3-2.365h-2.4c0 .013-.004.01.005 0a.102.102 0 01.033-.022.157.157 0 01.063-.013v2.4zm-7.283 0h7.284v-2.4h-7.284v2.4zM7.8 22.988c0 1.239.964 2.365 2.299 2.365v-2.4c.022 0 .044.005.063.013a.103.103 0 01.033.022c.01.01.005.013.005 0H7.8zm0-11.23v11.23h2.4v-11.23H7.8zM8.56 10a2.396 2.396 0 00-.76 1.756h2.4l.001-.009s-.001.005-.01.012L8.56 10zM19.153.174L8.559 10.001l1.632 1.76 10.595-9.827-1.632-1.76z"
        fill="#FFC24B"
        mask="url(#a)"
        />
        <Path
        d="M4.83 31.54H1.89V36H.93v-5.3h3.9v.84zm5.191-.84V36h-.96v-4.46h-2.28l-.06 1.18c-.033.713-.097 1.31-.19 1.79-.093.473-.247.853-.46 1.14-.213.287-.51.43-.89.43-.173 0-.37-.03-.59-.09l.06-.81c.087.02.167.03.24.03a.649.649 0 00.6-.35c.133-.233.22-.51.26-.83.04-.32.077-.777.11-1.37l.09-1.96h4.07zm3.746-.05c.734 0 1.294.18 1.68.54.394.36.59.897.59 1.61V36h-.91v-.7c-.16.247-.39.437-.69.57-.293.127-.643.19-1.05.19-.593 0-1.07-.143-1.43-.43a1.384 1.384 0 01-.53-1.13c0-.467.17-.84.51-1.12.34-.287.88-.43 1.62-.43h1.52v-.19c0-.413-.12-.73-.36-.95-.24-.22-.593-.33-1.06-.33-.313 0-.62.053-.92.16a2.3 2.3 0 00-.76.41l-.4-.72c.274-.22.6-.387.98-.5.38-.12.784-.18 1.21-.18zm-.22 4.67c.367 0 .684-.08.95-.24.267-.167.46-.4.58-.7v-.74h-1.48c-.813 0-1.22.273-1.22.82 0 .267.104.477.31.63.207.153.494.23.86.23zm7.829-2.07c.687.173 1.03.603 1.03 1.29 0 .467-.177.827-.53 1.08-.347.253-.867.38-1.56.38h-2.55v-5.3h2.46c.627 0 1.117.12 1.47.36.353.233.53.567.53 1 0 .28-.077.523-.23.73-.147.2-.353.353-.62.46zm-2.67-.27h1.44c.367 0 .643-.067.83-.2a.66.66 0 00.29-.58c0-.507-.373-.76-1.12-.76h-1.44v1.54zm1.54 2.28c.4 0 .7-.063.9-.19.2-.127.3-.323.3-.59 0-.273-.093-.477-.28-.61-.18-.133-.467-.2-.86-.2h-1.6v1.59h1.54zm3.663-4.56h.96v2.25h3.02V30.7h.96V36h-.96v-2.22h-3.02V36h-.96v-5.3zm8.696-.05c.734 0 1.294.18 1.68.54.394.36.59.897.59 1.61V36h-.91v-.7c-.16.247-.39.437-.69.57-.293.127-.643.19-1.05.19-.593 0-1.07-.143-1.43-.43a1.384 1.384 0 01-.53-1.13c0-.467.17-.84.51-1.12.34-.287.88-.43 1.62-.43h1.52v-.19c0-.413-.12-.73-.36-.95-.24-.22-.593-.33-1.06-.33-.313 0-.62.053-.92.16a2.3 2.3 0 00-.76.41l-.4-.72c.274-.22.6-.387.98-.5.38-.12.784-.18 1.21-.18zm-.22 4.67c.367 0 .684-.08.95-.24.267-.167.46-.4.58-.7v-.74h-1.48c-.813 0-1.22.273-1.22.82 0 .267.104.477.31.63.207.153.494.23.86.23zm8.469-4.62V36h-.86v-1.68H38.344L37.184 36h-1.03l1.29-1.81c-.4-.12-.707-.317-.92-.59-.214-.28-.32-.627-.32-1.04 0-.607.206-1.067.62-1.38.413-.32.983-.48 1.71-.48h2.32zm-3.67 1.89c0 .353.11.617.33.79.226.167.563.25 1.01.25h1.47v-2.09h-1.43c-.92 0-1.38.35-1.38 1.05z"
        fill="#FFC24B"
        />
    </Svg>
    }
    else {
        return <Svg
        width={40}
        height={37}
        viewBox="0 0 40 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Mask id="a" fill="#fff">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.97 1.054a1.053 1.053 0 011.447 0l10.595 9.826c.238.222.375.541.375.877v11.23c0 .644-.492 1.166-1.099 1.166h-7.284c-.607 0-1.099-.522-1.099-1.165v-3.51c0-1.295-.99-2.344-2.212-2.344-1.221 0-2.211 1.05-2.211 2.344v3.51c0 .643-.492 1.165-1.1 1.165H9.1C8.492 24.153 8 23.63 8 22.988v-11.23c0-.337.137-.656.375-.877L18.97 1.053z"
          />
        </Mask>
        <Path
          d="M20.417 1.054l-.816.88.816-.88zm-1.447 0l.816.88-.816-.88zm12.042 9.826l.816-.88-.816.88zm-13.53 12.097h-1.2v.005l1.2-.005zm0 .01h1.2v-.004l-1.2.005zM8.375 10.882L7.56 10l.816.88zM21.233.173a2.253 2.253 0 00-3.08 0l1.633 1.76a.141.141 0 01-.093.032.14.14 0 01-.092-.032l1.632-1.76zm10.595 9.827L21.233.174l-1.632 1.76 10.595 9.826L31.828 10zm.76 1.756c0-.657-.268-1.3-.76-1.756l-1.632 1.76c-.009-.008-.01-.013-.01-.013l.001.01h2.4zm0 11.23v-11.23h-2.4v11.23h2.4zm-2.3 2.366c1.335 0 2.3-1.126 2.3-2.365h-2.4c0 .013-.005.01.004 0a.103.103 0 01.033-.022.158.158 0 01.063-.013v2.4zm-7.284 0h7.284v-2.4h-7.284v2.4zm-2.299-2.365c0 1.239.965 2.365 2.3 2.365v-2.4c.021 0 .044.005.063.013a.1.1 0 01.032.022c.01.01.005.013.005 0h-2.4zm0-3.51v3.51h2.4v-3.51h-2.4zm-1.011-1.144c.493 0 1.011.445 1.011 1.144h2.4c0-1.89-1.462-3.544-3.412-3.544v2.4zm-1.012 1.144c0-.699.518-1.144 1.012-1.144v-2.4c-1.95 0-3.412 1.653-3.412 3.544h2.4zm0 3.5v-3.5h-2.4v3.5h2.4zm0 .005v-.01l-2.4.01v.01l2.4-.01zm-2.3 2.37c1.335 0 2.3-1.126 2.3-2.365h-2.4c0 .013-.004.01.005 0a.102.102 0 01.033-.022.157.157 0 01.063-.013v2.4zm-7.283 0h7.284v-2.4H9.099v2.4zM6.8 22.988c0 1.239.964 2.365 2.299 2.365v-2.4c.022 0 .045.005.063.013a.102.102 0 01.033.022c.01.01.005.013.005 0H6.8zm0-11.23v11.23h2.4v-11.23H6.8zM7.56 10a2.396 2.396 0 00-.76 1.756h2.4l.001-.009s-.001.005-.01.012L7.56 10zM18.153.174L7.559 10.001l1.632 1.76 10.595-9.827-1.632-1.76z"
          fill="#000"
          mask="url(#a)"
        />
        <Path
          d="M3.73 31.37H.72V36H.01v-5.26h3.72v.63zm5.004-.63V36h-.71v-4.63h-2.52l-.07 1.3c-.054 1.093-.18 1.933-.38 2.52s-.557.88-1.07.88c-.14 0-.31-.027-.51-.08l.05-.61c.12.027.203.04.25.04.273 0 .48-.127.62-.38s.233-.567.28-.94c.046-.373.086-.867.12-1.48l.09-1.88h3.85zm3.828-.04c.687 0 1.213.173 1.58.52.367.34.55.847.55 1.52V36h-.68v-.82c-.16.273-.396.487-.71.64-.306.153-.673.23-1.1.23-.586 0-1.053-.14-1.4-.42-.346-.28-.52-.65-.52-1.11 0-.447.16-.807.48-1.08.327-.273.843-.41 1.55-.41h1.67v-.32c0-.453-.127-.797-.38-1.03-.253-.24-.623-.36-1.11-.36-.333 0-.653.057-.96.17-.306.107-.57.257-.79.45l-.32-.53c.267-.227.587-.4.96-.52.373-.127.767-.19 1.18-.19zm-.25 4.79c.4 0 .744-.09 1.03-.27.287-.187.5-.453.64-.8v-.86h-1.65c-.9 0-1.35.313-1.35.94 0 .307.117.55.35.73.233.173.56.26.98.26zm7.62-2.21c.714.167 1.07.597 1.07 1.29 0 .46-.17.813-.51 1.06-.34.247-.846.37-1.52.37h-2.39v-5.26h2.32c.6 0 1.07.117 1.41.35.34.233.51.567.51 1 0 .287-.08.533-.24.74-.153.2-.37.35-.65.45zm-2.66-.2h1.58c.407 0 .717-.077.93-.23.22-.153.33-.377.33-.67 0-.293-.11-.513-.33-.66-.213-.147-.523-.22-.93-.22h-1.58v1.78zm1.67 2.36c.454 0 .794-.073 1.02-.22.227-.147.34-.377.34-.69 0-.313-.103-.543-.31-.69-.206-.153-.533-.23-.98-.23h-1.74v1.83h1.67zm3.724-4.7h.71v2.33h3.31v-2.33h.71V36h-.71v-2.32h-3.31V36h-.71v-5.26zm8.558-.04c.687 0 1.214.173 1.58.52.367.34.55.847.55 1.52V36h-.68v-.82c-.16.273-.396.487-.71.64-.306.153-.673.23-1.1.23-.586 0-1.053-.14-1.4-.42-.346-.28-.52-.65-.52-1.11 0-.447.16-.807.48-1.08.327-.273.844-.41 1.55-.41h1.67v-.32c0-.453-.126-.797-.38-1.03-.253-.24-.623-.36-1.11-.36-.333 0-.653.057-.96.17-.306.107-.57.257-.79.45l-.32-.53c.267-.227.587-.4.96-.52.374-.127.767-.19 1.18-.19zm-.25 4.79c.4 0 .744-.09 1.03-.27.287-.187.5-.453.64-.8v-.86h-1.65c-.9 0-1.35.313-1.35.94 0 .307.117.55.35.73.234.173.56.26.98.26zm8.31-4.75V36h-.65v-1.74H36.784L35.564 36h-.77l1.31-1.84c-.406-.113-.72-.307-.94-.58-.22-.273-.33-.62-.33-1.04 0-.587.2-1.033.6-1.34.4-.307.947-.46 1.64-.46h2.21zm-3.73 1.82c0 .78.497 1.17 1.49 1.17h1.59v-2.36h-1.54c-1.026 0-1.54.397-1.54 1.19z"
          fill="#000"
        />
      </Svg>
    }
}

export const SearchSvg = ({focused}) =>{
  console.log(focused)
    if(!focused){
        return <Svg
        width={31}
        height={37}
        viewBox="0 0 31 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
        d="M4.73 30.74V36h-.71v-4.63H.72V36H.01v-5.26h4.72zm4.188 5.31c-.506 0-.963-.113-1.37-.34a2.552 2.552 0 01-.96-.96 2.723 2.723 0 01-.35-1.38c0-.513.117-.973.35-1.38a2.48 2.48 0 01.96-.95c.407-.227.864-.34 1.37-.34.507 0 .964.113 1.37.34.407.227.724.543.95.95.234.407.35.867.35 1.38 0 .513-.116.973-.35 1.38a2.48 2.48 0 01-.95.96c-.406.227-.863.34-1.37.34zm0-.63c.374 0 .707-.083 1-.25.3-.173.534-.417.7-.73.167-.313.25-.67.25-1.07s-.083-.757-.25-1.07a1.737 1.737 0 00-.7-.72 1.928 1.928 0 00-1-.26c-.373 0-.71.087-1.01.26a1.82 1.82 0 00-.7.72c-.166.313-.25.67-.25 1.07s.084.757.25 1.07c.174.313.407.557.7.73.3.167.637.25 1.01.25zm4.188-4.68h.71v4.18l3.51-4.18h.63V36h-.71v-4.18l-3.5 4.18h-.64v-5.26zm9.085 5.31c-.52 0-.987-.113-1.4-.34a2.48 2.48 0 01-.96-.95 2.777 2.777 0 01-.35-1.39c0-.513.116-.973.35-1.38a2.48 2.48 0 01.96-.95c.413-.227.88-.34 1.4-.34.453 0 .856.09 1.21.27.36.173.643.43.85.77l-.53.36a1.622 1.622 0 00-.66-.58 1.919 1.919 0 00-.87-.2c-.38 0-.724.087-1.03.26a1.8 1.8 0 00-.71.72c-.167.313-.25.67-.25 1.07 0 .407.083.767.25 1.08.173.307.41.547.71.72.306.167.65.25 1.03.25.313 0 .603-.063.87-.19.266-.127.486-.32.66-.58l.53.36c-.207.34-.49.6-.85.78-.36.173-.764.26-1.21.26zm5.344-2.39h-1.2V36h-.71v-5.26h.71v2.31h1.21l1.85-2.31h.77l-2.07 2.55 2.22 2.71h-.84l-1.94-2.34z"
        fill="#000"
        />
        <Circle cx={12} cy={9} r={8.4} stroke="#000" strokeWidth={1.2} />
        <Path
        d="M25.576 23.424a.6.6 0 00.848-.848l-.848.848zm-8-8l8 8 .848-.848-8-8-.848.848z"
        fill="#000"
        />
    </Svg>
    }
    else {
      return <Svg
      width={32}
      height={37}
      viewBox="0 0 32 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5.84 30.7V36h-.96v-4.46H1.89V36H.93v-5.3h4.91zm4.128 5.36c-.527 0-1-.117-1.42-.35a2.585 2.585 0 01-.99-.96 2.798 2.798 0 01-.35-1.4c0-.52.116-.983.35-1.39.24-.413.57-.733.99-.96.42-.233.893-.35 1.42-.35.526 0 .996.117 1.41.35.42.227.746.547.98.96.24.407.36.87.36 1.39 0 .52-.12.987-.36 1.4-.234.407-.56.727-.98.96-.414.233-.884.35-1.41.35zm0-.84c.34 0 .643-.077.91-.23.273-.16.486-.38.64-.66.153-.287.23-.613.23-.98s-.077-.69-.23-.97a1.608 1.608 0 00-.64-.66 1.793 1.793 0 00-.91-.23c-.34 0-.647.077-.92.23-.267.153-.48.373-.64.66-.154.28-.23.603-.23.97s.076.693.23.98c.16.28.373.5.64.66.273.153.58.23.92.23zm4.136-4.52h.96v3.86l3.25-3.86h.87V36h-.96v-3.86L14.984 36h-.88v-5.3zm9.253 5.36c-.54 0-1.023-.117-1.45-.35a2.585 2.585 0 01-.99-.96c-.24-.413-.36-.88-.36-1.4 0-.52.12-.983.36-1.39.24-.413.57-.733.99-.96.427-.233.91-.35 1.45-.35.48 0 .907.097 1.28.29.38.193.674.473.88.84l-.73.47a1.631 1.631 0 00-.62-.57 1.768 1.768 0 00-.82-.19c-.347 0-.66.077-.94.23-.273.153-.49.373-.65.66-.153.28-.23.603-.23.97 0 .373.077.703.23.99.16.28.377.497.65.65.28.153.593.23.94.23.3 0 .573-.063.82-.19s.453-.317.62-.57l.73.46c-.206.367-.5.65-.88.85-.373.193-.8.29-1.28.29zm5.463-2.3h-1.1V36h-.96v-5.3h.96v2.24h1.12l1.72-2.24h1.03l-2.01 2.55L31.73 36H30.6l-1.78-2.24z"
        fill="#FFC24B"
      />
      <Circle cx={13} cy={9} r={8.4} stroke="#FFC24B" strokeWidth={1.2} />
      <Path
        d="M26.576 23.424a.6.6 0 00.848-.848l-.848.848zm-8-8l8 8 .848-.848-8-8-.848.848z"
        fill="#FFC24B"
      />
    </Svg>
    }
}
export const AddSvg = () =>{
  return <Svg
  width={38}
  height={38}
  viewBox="0 0 38 38"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    d="M19 9v20M29 19H9"
    stroke="#000"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <Rect
    x={0.6}
    y={0.6}
    width={36.8}
    height={36.8}
    rx={18.4}
    stroke="#000"
    strokeWidth={1.2}
  />
</Svg>
}

export const ChatSvg = ({focused}) =>{
  if(!focused){
    return  <Svg
    width={25}
    height={37}
    viewBox="0 0 25 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M13.21 22.638H6.677A4.082 4.082 0 012.6 18.56v-7.233a10.636 10.636 0 1110.61 11.31z"
      stroke="#000"
      strokeWidth={1.2}
    />
    <Rect
      x={8.54834}
      y={9.18503}
      width={9.35484}
      height={1.2}
      rx={0.6}
      fill="#000"
    />
    <Rect
      x={8.54834}
      y={13.8625}
      width={5.6129}
      height={1.2}
      rx={0.6}
      fill="#000"
    />
    <Path
      d="M4.98 30.74V36h-.71v-2.19c-.607.267-1.203.4-1.79.4-.633 0-1.127-.143-1.48-.43-.353-.293-.53-.73-.53-1.31v-1.73h.71v1.69c0 .393.127.693.38.9.253.2.603.3 1.05.3.493 0 1.047-.13 1.66-.39v-2.5h.71zm3.826-.04c.687 0 1.214.173 1.58.52.367.34.55.847.55 1.52V36h-.68v-.82c-.16.273-.396.487-.71.64-.306.153-.673.23-1.1.23-.586 0-1.053-.14-1.4-.42-.346-.28-.52-.65-.52-1.11 0-.447.16-.807.48-1.08.327-.273.844-.41 1.55-.41h1.67v-.32c0-.453-.126-.797-.38-1.03-.253-.24-.623-.36-1.11-.36-.333 0-.653.057-.96.17-.306.107-.57.257-.79.45l-.32-.53c.267-.227.587-.4.96-.52.374-.127.767-.19 1.18-.19zm-.25 4.79c.4 0 .744-.09 1.03-.27.287-.187.5-.453.64-.8v-.86h-1.65c-.9 0-1.35.313-1.35.94 0 .307.117.55.35.73.234.173.56.26.98.26zm7.97-4.12h-1.99V36h-.71v-4.63h-1.99v-.63h4.69v.63zm3.237 1.23c.66.007 1.163.153 1.51.44.347.287.52.7.52 1.24 0 .56-.187.99-.56 1.29-.373.3-.907.447-1.6.44l-2.08-.01v-5.26h.71v1.84l1.5.02zm2.91-1.86h.71V36h-.71v-5.26zm-3.08 4.73c.487.007.853-.09 1.1-.29.253-.207.38-.507.38-.9 0-.387-.123-.673-.37-.86-.247-.187-.617-.283-1.11-.29l-1.33-.02v2.34l1.33.02z"
      fill="#000"
    />
  </Svg>
  }
  else {
    return  <Svg
    width={25}
    height={37}
    viewBox="0 0 25 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M13.21 22.638H6.677A4.082 4.082 0 012.6 18.56v-7.233a10.636 10.636 0 1110.61 11.31z"
      stroke="#FFC24B"
      strokeWidth={1.2}
    />
    <Rect
      x={8.54834}
      y={9.18503}
      width={9.35484}
      height={1.2}
      rx={0.6}
      fill="#FFC24B"
    />
    <Rect
      x={8.54834}
      y={13.8625}
      width={5.6129}
      height={1.2}
      rx={0.6}
      fill="#FFC24B"
    />
    <Path
      d="M4.98 30.74V36h-.71v-2.19c-.607.267-1.203.4-1.79.4-.633 0-1.127-.143-1.48-.43-.353-.293-.53-.73-.53-1.31v-1.73h.71v1.69c0 .393.127.693.38.9.253.2.603.3 1.05.3.493 0 1.047-.13 1.66-.39v-2.5h.71zm3.826-.04c.687 0 1.214.173 1.58.52.367.34.55.847.55 1.52V36h-.68v-.82c-.16.273-.396.487-.71.64-.306.153-.673.23-1.1.23-.586 0-1.053-.14-1.4-.42-.346-.28-.52-.65-.52-1.11 0-.447.16-.807.48-1.08.327-.273.844-.41 1.55-.41h1.67v-.32c0-.453-.126-.797-.38-1.03-.253-.24-.623-.36-1.11-.36-.333 0-.653.057-.96.17-.306.107-.57.257-.79.45l-.32-.53c.267-.227.587-.4.96-.52.374-.127.767-.19 1.18-.19zm-.25 4.79c.4 0 .744-.09 1.03-.27.287-.187.5-.453.64-.8v-.86h-1.65c-.9 0-1.35.313-1.35.94 0 .307.117.55.35.73.234.173.56.26.98.26zm7.97-4.12h-1.99V36h-.71v-4.63h-1.99v-.63h4.69v.63zm3.237 1.23c.66.007 1.163.153 1.51.44.347.287.52.7.52 1.24 0 .56-.187.99-.56 1.29-.373.3-.907.447-1.6.44l-2.08-.01v-5.26h.71v1.84l1.5.02zm2.91-1.86h.71V36h-.71v-5.26zm-3.08 4.73c.487.007.853-.09 1.1-.29.253-.207.38-.507.38-.9 0-.387-.123-.673-.37-.86-.247-.187-.617-.283-1.11-.29l-1.33-.02v2.34l1.33.02z"
      fill="#FFC24B"
    />
  </Svg>
  }
}

export const UserSvg = ({focused}) =>{
  if(!focused)
    return <Svg
    width={46}
    height={38}
    viewBox="0 0 46 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Mask id="a" fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.83 9.78a4.89 4.89 0 100-9.78 4.89 4.89 0 000 9.78zm-1.31 1.62A7.52 7.52 0 0013 18.92a4.297 4.297 0 004.297 4.297h10.116a4.297 4.297 0 004.297-4.297 7.52 7.52 0 00-7.52-7.52h-3.67z"
      />
    </Mask>
    <Path
      d="M25.52 4.89a3.69 3.69 0 01-3.69 3.69v2.4a6.09 6.09 0 006.09-6.09h-2.4zM21.83 1.2a3.69 3.69 0 013.69 3.69h2.4a6.09 6.09 0 00-6.09-6.09v2.4zm-3.69 3.69a3.69 3.69 0 013.69-3.69v-2.4a6.09 6.09 0 00-6.09 6.09h2.4zm3.69 3.69a3.69 3.69 0 01-3.69-3.69h-2.4a6.09 6.09 0 006.09 6.09v-2.4zM14.2 18.92a6.32 6.32 0 016.32-6.32v-2.4a8.72 8.72 0 00-8.72 8.72h2.4zm3.097 3.097A3.097 3.097 0 0114.2 18.92h-2.4a5.497 5.497 0 005.497 5.497v-2.4zm10.116 0H17.297v2.4h10.116v-2.4zm3.097-3.097a3.097 3.097 0 01-3.097 3.097v2.4a5.497 5.497 0 005.497-5.497h-2.4zm-6.32-6.32a6.32 6.32 0 016.32 6.32h2.4a8.72 8.72 0 00-8.72-8.72v2.4zm-3.67 0h3.67v-2.4h-3.67v2.4z"
      fill="#000"
      mask="url(#a)"
    />
    <Path
      d="M4.73 30.74V36h-.71v-4.63H.72V36H.01v-5.26h4.72zm4.728-.04c.494 0 .94.113 1.34.34.4.22.714.533.94.94.227.407.34.87.34 1.39 0 .527-.113.993-.34 1.4a2.43 2.43 0 01-.94.95c-.393.22-.84.33-1.34.33-.426 0-.813-.087-1.16-.26-.34-.18-.62-.44-.84-.78v2.93h-.71v-7.2h.68v1.04c.214-.347.494-.613.84-.8.354-.187.75-.28 1.19-.28zm-.05 4.72c.367 0 .7-.083 1-.25.3-.173.534-.417.7-.73.174-.313.26-.67.26-1.07s-.086-.753-.26-1.06a1.802 1.802 0 00-.7-.73c-.3-.173-.633-.26-1-.26-.373 0-.71.087-1.01.26a1.892 1.892 0 00-.7.73c-.166.307-.25.66-.25 1.06s.084.757.25 1.07c.174.313.407.557.7.73.3.167.637.25 1.01.25zm6.366.63c-.507 0-.964-.113-1.37-.34a2.551 2.551 0 01-.96-.96 2.722 2.722 0 01-.35-1.38c0-.513.116-.973.35-1.38a2.48 2.48 0 01.96-.95c.406-.227.863-.34 1.37-.34.506 0 .963.113 1.37.34.406.227.723.543.95.95.233.407.35.867.35 1.38 0 .513-.117.973-.35 1.38a2.48 2.48 0 01-.95.96c-.407.227-.864.34-1.37.34zm0-.63c.373 0 .706-.083 1-.25.3-.173.533-.417.7-.73.166-.313.25-.67.25-1.07s-.084-.757-.25-1.07a1.737 1.737 0 00-.7-.72 1.929 1.929 0 00-1-.26c-.374 0-.71.087-1.01.26a1.82 1.82 0 00-.7.72c-.167.313-.25.67-.25 1.07s.083.757.25 1.07c.173.313.406.557.7.73.3.167.636.25 1.01.25zm10.537-2.06c0 .82-.27 1.463-.81 1.93-.54.467-1.303.72-2.29.76v1.89h-.69v-1.88c-.98-.04-1.74-.293-2.28-.76-.533-.473-.8-1.12-.8-1.94 0-.813.267-1.45.8-1.91.54-.46 1.3-.71 2.28-.75v-2.12h.69v2.12c.987.047 1.75.3 2.29.76s.81 1.093.81 1.9zm-6.17 0c0 .627.2 1.117.6 1.47.407.353 1 .553 1.78.6v-4.1c-.773.04-1.363.237-1.77.59-.407.347-.61.827-.61 1.44zm3.07 2.07c.78-.04 1.373-.237 1.78-.59.413-.353.62-.847.62-1.48 0-.62-.207-1.103-.62-1.45-.407-.347-1-.54-1.78-.58v4.1zm4.602-4.69h.71v4.18l3.51-4.18h.63V36h-.71v-4.18l-3.5 4.18h-.64v-5.26zm11.185 0V36h-.71v-4.63h-2.52l-.07 1.3c-.054 1.093-.18 1.933-.38 2.52s-.557.88-1.07.88c-.14 0-.31-.027-.51-.08l.05-.61c.12.027.203.04.25.04.273 0 .48-.127.62-.38s.233-.567.28-.94c.046-.373.086-.867.12-1.48l.09-1.88h3.85zm4.278 1.86c.66.007 1.16.153 1.5.44.346.287.52.7.52 1.24 0 .56-.187.99-.56 1.29-.367.3-.9.447-1.6.44l-2.12-.01v-5.26h.71v1.84l1.55.02zm-.18 2.87c.487.007.853-.09 1.1-.29.253-.207.38-.507.38-.9 0-.387-.123-.673-.37-.86-.247-.187-.617-.283-1.11-.29l-1.37-.02v2.34l1.37.02z"
      fill="#000"
    />
  </Svg>
  else {
    return <Svg
    width={46}
    height={38}
    viewBox="0 0 46 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Mask id="a" fill="#FFC24B">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.83 9.78a4.89 4.89 0 100-9.78 4.89 4.89 0 000 9.78zm-1.31 1.62A7.52 7.52 0 0013 18.92a4.297 4.297 0 004.297 4.297h10.116a4.297 4.297 0 004.297-4.297 7.52 7.52 0 00-7.52-7.52h-3.67z"
      />
    </Mask>
    <Path
      d="M25.52 4.89a3.69 3.69 0 01-3.69 3.69v2.4a6.09 6.09 0 006.09-6.09h-2.4zM21.83 1.2a3.69 3.69 0 013.69 3.69h2.4a6.09 6.09 0 00-6.09-6.09v2.4zm-3.69 3.69a3.69 3.69 0 013.69-3.69v-2.4a6.09 6.09 0 00-6.09 6.09h2.4zm3.69 3.69a3.69 3.69 0 01-3.69-3.69h-2.4a6.09 6.09 0 006.09 6.09v-2.4zM14.2 18.92a6.32 6.32 0 016.32-6.32v-2.4a8.72 8.72 0 00-8.72 8.72h2.4zm3.097 3.097A3.097 3.097 0 0114.2 18.92h-2.4a5.497 5.497 0 005.497 5.497v-2.4zm10.116 0H17.297v2.4h10.116v-2.4zm3.097-3.097a3.097 3.097 0 01-3.097 3.097v2.4a5.497 5.497 0 005.497-5.497h-2.4zm-6.32-6.32a6.32 6.32 0 016.32 6.32h2.4a8.72 8.72 0 00-8.72-8.72v2.4zm-3.67 0h3.67v-2.4h-3.67v2.4z"
      fill="#FFC24B"
      mask="url(#a)"
    />
    <Path
      d="M4.73 30.74V36h-.71v-4.63H.72V36H.01v-5.26h4.72zm4.728-.04c.494 0 .94.113 1.34.34.4.22.714.533.94.94.227.407.34.87.34 1.39 0 .527-.113.993-.34 1.4a2.43 2.43 0 01-.94.95c-.393.22-.84.33-1.34.33-.426 0-.813-.087-1.16-.26-.34-.18-.62-.44-.84-.78v2.93h-.71v-7.2h.68v1.04c.214-.347.494-.613.84-.8.354-.187.75-.28 1.19-.28zm-.05 4.72c.367 0 .7-.083 1-.25.3-.173.534-.417.7-.73.174-.313.26-.67.26-1.07s-.086-.753-.26-1.06a1.802 1.802 0 00-.7-.73c-.3-.173-.633-.26-1-.26-.373 0-.71.087-1.01.26a1.892 1.892 0 00-.7.73c-.166.307-.25.66-.25 1.06s.084.757.25 1.07c.174.313.407.557.7.73.3.167.637.25 1.01.25zm6.366.63c-.507 0-.964-.113-1.37-.34a2.551 2.551 0 01-.96-.96 2.722 2.722 0 01-.35-1.38c0-.513.116-.973.35-1.38a2.48 2.48 0 01.96-.95c.406-.227.863-.34 1.37-.34.506 0 .963.113 1.37.34.406.227.723.543.95.95.233.407.35.867.35 1.38 0 .513-.117.973-.35 1.38a2.48 2.48 0 01-.95.96c-.407.227-.864.34-1.37.34zm0-.63c.373 0 .706-.083 1-.25.3-.173.533-.417.7-.73.166-.313.25-.67.25-1.07s-.084-.757-.25-1.07a1.737 1.737 0 00-.7-.72 1.929 1.929 0 00-1-.26c-.374 0-.71.087-1.01.26a1.82 1.82 0 00-.7.72c-.167.313-.25.67-.25 1.07s.083.757.25 1.07c.173.313.406.557.7.73.3.167.636.25 1.01.25zm10.537-2.06c0 .82-.27 1.463-.81 1.93-.54.467-1.303.72-2.29.76v1.89h-.69v-1.88c-.98-.04-1.74-.293-2.28-.76-.533-.473-.8-1.12-.8-1.94 0-.813.267-1.45.8-1.91.54-.46 1.3-.71 2.28-.75v-2.12h.69v2.12c.987.047 1.75.3 2.29.76s.81 1.093.81 1.9zm-6.17 0c0 .627.2 1.117.6 1.47.407.353 1 .553 1.78.6v-4.1c-.773.04-1.363.237-1.77.59-.407.347-.61.827-.61 1.44zm3.07 2.07c.78-.04 1.373-.237 1.78-.59.413-.353.62-.847.62-1.48 0-.62-.207-1.103-.62-1.45-.407-.347-1-.54-1.78-.58v4.1zm4.602-4.69h.71v4.18l3.51-4.18h.63V36h-.71v-4.18l-3.5 4.18h-.64v-5.26zm11.185 0V36h-.71v-4.63h-2.52l-.07 1.3c-.054 1.093-.18 1.933-.38 2.52s-.557.88-1.07.88c-.14 0-.31-.027-.51-.08l.05-.61c.12.027.203.04.25.04.273 0 .48-.127.62-.38s.233-.567.28-.94c.046-.373.086-.867.12-1.48l.09-1.88h3.85zm4.278 1.86c.66.007 1.16.153 1.5.44.346.287.52.7.52 1.24 0 .56-.187.99-.56 1.29-.367.3-.9.447-1.6.44l-2.12-.01v-5.26h.71v1.84l1.55.02zm-.18 2.87c.487.007.853-.09 1.1-.29.253-.207.38-.507.38-.9 0-.387-.123-.673-.37-.86-.247-.187-.617-.283-1.11-.29l-1.37-.02v2.34l1.37.02z"
      fill="#FFC24B"
    />
  </Svg>
  }
}
export const Notification = () =>{
  return <Svg
  width={23}
  height={26}
  viewBox="0 0 23 26"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    d="M22.89 17.194L20.276 7.77a9.372 9.372 0 00-18.182.474l-2.022 9.1a3.016 3.016 0 002.944 3.67h3.626a5.028 5.028 0 009.854 0h3.489a3.016 3.016 0 002.906-3.821h-.001zm-11.32 5.831a3.017 3.017 0 01-2.832-2.01H14.4a3.017 3.017 0 01-2.832 2.01zm9.214-4.419a1 1 0 01-.804.397H3.016a1.004 1.004 0 01-.982-1.223l2.022-9.1a7.361 7.361 0 0114.278-.374l2.614 9.423a.999.999 0 01-.164.877z"
    fill="#444"
  />
</Svg>
}

export const MenuSvg = () =>{
  return <Svg
  width={4}
  height={20}
  viewBox="0 0 4 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    d="M1.667 16.666a1.667 1.667 0 100 3.334 1.667 1.667 0 000-3.334zM1.667 8.333a1.667 1.667 0 100 3.334 1.667 1.667 0 000-3.334zM1.667 0a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333z"
    fill="#444"
  />
</Svg>
}

export const Heart = () =>{
  return <Svg
  width={26}
  height={23}
  viewBox="0 0 26 23"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M25.995 7.686c0 4.958-5.183 10.372-9.53 14.043A5.365 5.365 0 0113 23a5.364 5.364 0 01-3.465-1.271C5.188 18.058.005 12.644.005 7.686A7.443 7.443 0 011.95 2.381 7.343 7.343 0 017.044 0a6.896 6.896 0 014.651 1.904A6.97 6.97 0 0113 3.598 6.97 6.97 0 0115.498.994 6.895 6.895 0 0118.956 0a7.343 7.343 0 015.094 2.381 7.443 7.443 0 011.945 5.305z"
    fill="#FF5656"
  />
</Svg>
}

export const Comment = () =>{
  return <Svg
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    d="M11.982 23.1h0H5a4.107 4.107 0 01-2.898-1.201A4.097 4.097 0 01.9 19.004v-7.716a11.093 11.093 0 012.197-5.944 11.11 11.11 0 0111.48-4.139A11.113 11.113 0 0120.086 4.4a11.096 11.096 0 012.099 12.01 11.119 11.119 0 01-10.202 6.69z"
    stroke="#444"
    strokeWidth={1.8}
  />
  <Path
    d="M11.632 15.52H8.125c-.299 0-.585-.095-.796-.263A.82.82 0 017 14.62a.82.82 0 01.33-.636c.211-.168.497-.263.796-.263h3.507c.298 0 .584.095.795.263a.82.82 0 01.33.636.82.82 0 01-.33.636 1.282 1.282 0 01-.795.263zM8.165 8.992h8.007c.298 0 .584.094.795.263a.82.82 0 01.33.636.82.82 0 01-.33.636 1.282 1.282 0 01-.795.263H8.165c-.298 0-.584-.095-.795-.263a.82.82 0 01-.33-.636.82.82 0 01.33-.636c.21-.169.497-.263.795-.263z"
    fill="#444"
  />
</Svg>
}

export const Share = () =>{
  return <Svg
  width={25}
  height={23}
  viewBox="0 0 25 23"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    d="M23.802 10.624l.692-.575-.692.575zm0 1.279l.692.575-.692-.575zm-7.7-10.54l-.691.575.692-.575zm-1.768.639h.9-.9zm0 5.372v.9a.9.9 0 00.9-.9h-.9zM1 19.083H.1a.9.9 0 001.674.458L1 19.082zm13.334-3.93h.9a.9.9 0 00-.9-.9v.9zm0 5.372h.9-.9zm1.769.639l-.693-.575.693.575zm7.007-9.965a.1.1 0 010 .128l1.384 1.151a1.9 1.9 0 000-2.43L23.11 11.2zm-7.7-9.26l7.7 9.26 1.384-1.15-7.7-9.262-1.383 1.151zm-.176.063c0-.039.01-.053.014-.059a.112.112 0 01.052-.035.112.112 0 01.062-.006c.007.002.024.006.049.036l1.384-1.15C15.658-.58 13.434.223 13.434 2.001h1.8zm0 5.372V2.002h-1.8v5.372h1.8zm-.9-.9H9v1.8h5.334v-1.8zM9 6.474a8.9 8.9 0 00-8.9 8.9h1.8a7.1 7.1 0 017.1-7.1v-1.8zm-8.9 8.9v3.708h1.8v-3.708H.1zm1.674 4.167a7.096 7.096 0 016.115-3.489v-1.8a8.896 8.896 0 00-7.663 4.372l1.548.917zm6.115-3.489h6.445v-1.8H7.889v1.8zm7.345 4.473v-5.373h-1.8v5.373h1.8zm.177.064c-.025.03-.042.034-.049.036a.112.112 0 01-.062-.006.112.112 0 01-.052-.036c-.005-.006-.014-.02-.014-.058h-1.8c0 1.778 2.224 2.582 3.36 1.214l-1.383-1.15zm7.7-9.262l-7.7 9.262 1.384 1.15 7.7-9.261-1.385-1.15z"
    fill="#444"
  />
</Svg>
}

export const ViewSvg = () =>{
  return <Svg
  width={21}
  height={16}
  viewBox="0 0 21 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    d="M20.843 7.345C20.075 5.665 17.063.187 10.5.187 3.937.187.925 5.665.157 7.345a1.723 1.723 0 000 1.435c.768 1.679 3.78 7.157 10.343 7.157 6.562 0 9.575-5.478 10.343-7.158a1.722 1.722 0 000-1.434zM10.5 13.312a5.25 5.25 0 110-10.5 5.25 5.25 0 010 10.5z"
    fill="#D3DEE7"
  />
  <Path d="M10.5 11.562a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill="#D3DEE7" />
</Svg>
}