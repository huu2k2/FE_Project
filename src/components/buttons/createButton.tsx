interface CreateButtonProps {
    name: string;
    handleOpenForm: ()=>void
  }
  export const CreateButton: React.FC<CreateButtonProps> = ({ name ,handleOpenForm}) => {
    return (
      <> <button
      onClick={handleOpenForm}
      className="bg-backgroundColor text-white px-4 py-2 rounded-lg font-semibold">
      ➕ {name}
    </button>
      </>
    );
  };
  