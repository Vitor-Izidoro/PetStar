import React from "react";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";

const DataWrapper = ({ 
  isLoading, 
  data, 
  emptyTitle,
  LoadingTitle, 
  emptyDescription, 
  onEmptyAction, 
  EmptyIcon, 
  LoadingIcon, 
  children 
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <LoadingState
            title={LoadingTitle}
            description="Por favor, aguarde enquanto buscamos os dados."
            icon={LoadingIcon}
        />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <EmptyState
          title={emptyTitle}
          description={emptyDescription}
          icon={EmptyIcon}
          actionLabel="Atualizar"
          onAction={onEmptyAction}
        />
      </div>
    );
  }

  return <>{children}</>;
};

export default DataWrapper;
