const FieldsRow = ({ children, gap="2rem" }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
                gap: gap,
                justifyContent: "center",
                marginTop: gap,
                marginBottom: gap,
            }}
        >
            {children}
        </div>
    );
};

export default FieldsRow;