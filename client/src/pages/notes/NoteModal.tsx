import { useState } from "react";
import { useRef } from "react";
import Button from "../../components/Button";
import "./NoteModal.scss";

export interface NoteModalProps {}

function NoteModal(props: NoteModalProps) {
  const [title, setTitle] = useState(titlePlaceholder);
  const [contents, setContents] = useState(contentsPlaceholder);
  const modalRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  const closeModal: React.MouseEventHandler<HTMLButtonElement> = () => {
    modalRef.current!.style.display = "none";
  };

  return (
    <div className="NoteModal" ref={modalRef}>
      <div className="NoteModal__Container">
        <main className="NoteModal__Note">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            className="NoteModal__Title"
          />
          <textarea
            name=""
            placeholder="Contents"
            value={contents}
            onChange={(e) => setContents(e.currentTarget.value)}
            className="NoteModal__Contents"
            spellCheck={false}
          ></textarea>
        </main>
        <footer className="NoteModal_Footer">
          <Button
            text="close"
            className="NoteModal__CloseButton"
            onClick={closeModal}
          />
        </footer>
      </div>
    </div>
  );
}

export default NoteModal;

const titlePlaceholder =
  "This is the title of the long note! this should overflow!";

const contentsPlaceholder =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Ultrices neque ornare aenean euismod elementum. Risus in hendrerit gravida rutrum quisque non. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Vulputate enim nulla aliquet porttitor lacus. Purus viverra accumsan in nisl nisi scelerisque. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Malesuada proin libero nunc consequat interdum. In iaculis nunc sed augue lacus viverra vitae congue. Duis tristique sollicitudin nibh sit amet commodo. Cursus sit amet dictum sit amet.\nFermentum iaculis eu non diam phasellus vestibulum lorem. Diam sit amet nisl suscipit adipiscing bibendum. Vehicula ipsum a arcu cursus vitae. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Vitae turpis massa sed elementum. Integer eget aliquet nibh praesent tristique. Faucibus in ornare quam viverra orci sagittis. Amet facilisis magna etiam tempor orci. Odio pellentesque diam volutpat commodo. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Volutpat diam ut venenatis tellus in. Pharetra vel turpis nunc eget lorem. Nunc lobortis mattis aliquam faucibus. Morbi leo urna molestie at. Eu mi bibendum neque egestas congue quisque egestas diam in.\nAliquet porttitor lacus luctus accumsan tortor posuere. Quam vulputate dignissim suspendisse in. Egestas integer eget aliquet nibh praesent. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Turpis nunc eget lorem dolor sed viverra ipsum. Ullamcorper sit amet risus nullam eget. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Eget mauris pharetra et ultrices. Placerat duis ultricies lacus sed. Euismod in pellentesque massa placerat duis.\nEu scelerisque felis imperdiet proin fermentum. Aenean euismod elementum nisi quis eleifend quam adipiscing. Nec feugiat in fermentum posuere urna. Eleifend quam adipiscing vitae proin. Congue nisi vitae suscipit tellus. Donec enim diam vulputate ut. Nunc mattis enim ut tellus elementum. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Mauris a diam maecenas sed enim. Sagittis id consectetur purus ut faucibus pulvinar. Varius quam quisque id diam. Tortor at risus viverra adipiscing. Eleifend donec pretium vulputate sapien nec sagittis. Commodo ullamcorper a lacus vestibulum sed arcu non. Nulla porttitor massa id neque aliquam vestibulum morbi. Sed ullamcorper morbi tincidunt ornare massa eget.\nTincidunt augue interdum velit euismod in pellentesque massa placerat duis. Libero volutpat sed cras ornare arcu dui vivamus. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Justo nec ultrices dui sapien eget mi proin. Vulputate ut pharetra sit amet aliquam id. Sed blandit libero volutpat sed cras ornare arcu. Amet purus gravida quis blandit turpis cursus. Amet risus nullam eget felis eget nunc lobortis mattis. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Ridiculus mus mauris vitae ultricies. Scelerisque fermentum dui faucibus in ornare quam. Auctor eu augue ut lectus arcu bibendum at. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Vitae aliquet nec ullamcorper sit amet. Et egestas quis ipsum suspendisse ultrices gravida. Elementum sagittis vitae et leo duis. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Ultrices neque ornare aenean euismod elementum. Risus in hendrerit gravida rutrum quisque non. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Vulputate enim nulla aliquet porttitor lacus. Purus viverra accumsan in nisl nisi scelerisque. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Malesuada proin libero nunc consequat interdum. In iaculis nunc sed augue lacus viverra vitae congue. Duis tristique sollicitudin nibh sit amet commodo. Cursus sit amet dictum sit amet.\nFermentum iaculis eu non diam phasellus vestibulum lorem. Diam sit amet nisl suscipit adipiscing bibendum. Vehicula ipsum a arcu cursus vitae. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Vitae turpis massa sed elementum. Integer eget aliquet nibh praesent tristique. Faucibus in ornare quam viverra orci sagittis. Amet facilisis magna etiam tempor orci. Odio pellentesque diam volutpat commodo. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Volutpat diam ut venenatis tellus in. Pharetra vel turpis nunc eget lorem. Nunc lobortis mattis aliquam faucibus. Morbi leo urna molestie at. Eu mi bibendum neque egestas congue quisque egestas diam in.\nAliquet porttitor lacus luctus accumsan tortor posuere. Quam vulputate dignissim suspendisse in. Egestas integer eget aliquet nibh praesent. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Turpis nunc eget lorem dolor sed viverra ipsum. Ullamcorper sit amet risus nullam eget. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Eget mauris pharetra et ultrices. Placerat duis ultricies lacus sed. Euismod in pellentesque massa placerat duis.\nEu scelerisque felis imperdiet proin fermentum. Aenean euismod elementum nisi quis eleifend quam adipiscing. Nec feugiat in fermentum posuere urna. Eleifend quam adipiscing vitae proin. Congue nisi vitae suscipit tellus. Donec enim diam vulputate ut. Nunc mattis enim ut tellus elementum. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Mauris a diam maecenas sed enim. Sagittis id consectetur purus ut faucibus pulvinar. Varius quam quisque id diam. Tortor at risus viverra adipiscing. Eleifend donec pretium vulputate sapien nec sagittis. Commodo ullamcorper a lacus vestibulum sed arcu non. Nulla porttitor massa id neque aliquam vestibulum morbi. Sed ullamcorper morbi tincidunt ornare massa eget.\nTincidunt augue interdum velit euismod in pellentesque massa placerat duis. Libero volutpat sed cras ornare arcu dui vivamus. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Justo nec ultrices dui sapien eget mi proin. Vulputate ut pharetra sit amet aliquam id. Sed blandit libero volutpat sed cras ornare arcu. Amet purus gravida quis blandit turpis cursus. Amet risus nullam eget felis eget nunc lobortis mattis. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Ridiculus mus mauris vitae ultricies. Scelerisque fermentum dui faucibus in ornare quam. Auctor eu augue ut lectus arcu bibendum at. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Vitae aliquet nec ullamcorper sit amet. Et egestas quis ipsum suspendisse ultrices gravida. Elementum sagittis vitae et leo duis. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque.";
