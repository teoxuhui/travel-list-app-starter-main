export default function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const packedPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;
  
    let progressBarColor = 'red'; 

    if (packedPercentage >= 50 && packedPercentage < 100) {
      progressBarColor = 'yellow'; 
    } else if (packedPercentage === 100) {
      progressBarColor = 'green';
    }
    const progressBarStyle = {
        width: `${packedPercentage}%`,
        height: '20px',
        borderRadius: '5px',
        backgroundColor: progressBarColor,
        transition: 'width 0.3s ease',
    };
  
    const containerStyle = {
      width: '100%',  
      borderRadius: '5px',
      height: '20px',
      backgroundColor: 'white',  
      overflow: 'hidden', 
      justifyContent:'left',
    };
  
    return (
      <footer className="stats">
        <div style={containerStyle}>
          <div style={{ ...progressBarStyle, transition: 'width 0.3s ease' }}></div>
        </div>
        {totalItems === 0 ? (
          <em>Your list is empty!</em>
        ) : packedPercentage === 100 ? (
          <em>You got everything!</em>
        ) : (
          <em>
            You have {totalItems} items in the list. You already packed {packedItems} ({packedPercentage}%).
          </em>
        )}
      </footer>
    );
  }
  