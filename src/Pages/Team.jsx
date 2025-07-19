import { motion } from "framer-motion";
import { FaClock, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Team() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #e6f0ff 0%, #b3d1ff 100%)',
        padding: '2rem',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background elements */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.3)',
          filter: 'blur(20px)'
        }}
      />

      <motion.div
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '3rem 2.5rem',
          borderRadius: '24px',
          boxShadow: '0 25px 50px rgba(0, 82, 204, 0.15)',
          maxWidth: '600px',
          width: '100%',
          position: 'relative',
          zIndex: 2,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 102, 255, 0.1)'
        }}
      >
        {/* Clock animation */}
        <motion.div
          animate={{ 
            rotate: [0, 10, -5, 0],
            y: [0, -15, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8, 
            ease: "easeInOut" 
          }}
          style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}
        >
          <FaClock size={80} style={{
            color: '#0066ff',
            filter: 'drop-shadow(0 5px 10px rgba(0, 102, 255, 0.2))'
          }} />
        </motion.div>
        
        <h1 style={{
          fontSize: '2.8rem',
          margin: '1rem 0',
          fontWeight: '800',
          background: 'linear-gradient(to right, #0052cc, #0066ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          textAlign: 'center',
          lineHeight: 1.2
        }}>
          Coming Soon!
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#4a6b8a',
          marginBottom: '2.5rem',
          lineHeight: '1.7',
          textAlign: 'center'
        }}>
          We're building an amazing team experience
          <br />
          Stay tuned for something special!
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.button
            onClick={() => navigate('/')}  
            whileHover={{ 
              scale: 1.05,
              background: 'linear-gradient(to right, #0052cc, #0066ff)',
              color: 'white'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.7rem',
              background: 'white',
              color: '#0066ff',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              border: '2px solid #0066ff',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1.1rem',
              boxShadow: '0 8px 20px rgba(0, 102, 255, 0.15)',
              transition: 'all 0.3s ease'
            }}
          >
            <FaHome /> Return Home
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Team;