interface Props {
  columnsLength: number;
}

function TableBodySkeleton({ columnsLength }: Props) {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <tr key={index}>
            {[...Array(columnsLength)].map((_, key) => {
              return (
                <td key={key}>
                  <div
                    className={
                      'h-5 w-full animate-pulse  rounded-md bg-primary/25'
                    }
                  />
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
}

export { TableBodySkeleton };
